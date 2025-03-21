import { JWTPayload } from '@/@types/common.type';

export const logoSymbol = `                                                                                                                                                                                          
     ......                .+++-.                                                             .=***-
  .+#@@@@@@*-.             :@@@=.                                                           .+@@@@@=
.+@@@@@@@@@@@=.  ..::..    :@@@=..:..        .::..    .......::..      ..::..    -%%- .:-=-.-%@@#:..
+@@@#.    .=. .#@@@@@@@@=. :@@@@@@@@@@=. .+@@@@@@@@+. -@@@@@@@@@@=. .=%@@@@@@@-. *@@%====+-*@@@@@@@:
%@@@:.         .*=::-%@@@=.:@@@@+:-#@@@+.*@@@*--*@@@*.-@@@@*=+@@@@..=@@@=..=@@@*.*@@@*===:.-*@@@%++.
#@@@-.        .-#%@@@@@@@=.:@@@=.  -%@@@-%@@%.  .%@@%--@@@*. .=@@@:.#@@@@@@@@@@#.*@@@+      -@@@#.  
:@@@@*:..:#@=.=@@@*..+@@@=.:@@@%:..+@@@#:#@@@-..=@@@#.-@@@+. .=@@@:.+@@@-...:..  *@@@+      -@@@#.  
..*@@@@@@@@@%=:%@@@@@@@@@=.:@@@@@@@@@@*. :*@@@@@@@@*. -@@@+. .=@@@: .=@@@@@@@@#. *@@@+      -@@@#.  
  ..=#%@%#*:.  .+###+:###- .###=+###+:.   ..+####=.   :###=. .-###.   .-*#%#*-.  =##*-      :*##+.                                                                                                
                                                                                                    `;

export const disableCopyPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
	event.preventDefault();
};

export const getPayload = (token: string): JWTPayload => {
	const myPayload = token.split('.')[1];

	return JSON.parse(atob(myPayload));
};

export const formatDate = (inputDate: string): string => {
	const date = new Date(inputDate);
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
	return date.toLocaleDateString('en-US', options);
};

type CustomSVG = {
	svgString: string;
	properties?: {
		width: number;
		height: number;
		fill: string;
		color: string;
		strokeWidth?: number;
	};
};

export const updateSVGAttributes = ({ svgString, properties }: CustomSVG): string => {
	// Validate input to ensure svgString is a valid string
	if (!svgString || typeof svgString !== 'string') {
		throw new Error('Invalid svgString. It must be a non-empty string.');
	}

	if (!properties) return svgString;

	let updatedSVG = svgString;

	// Replace or add width
	if (properties.width) {
		updatedSVG = updatedSVG.replace(/width="[^"]*"/, `width="${properties.width}"`);
	}

	// Replace or add height
	if (properties.height) {
		updatedSVG = updatedSVG.replace(/height="[^"]*"/, `height="${properties.height}"`);
	}

	// Replace or add fill color
	if (properties.fill) {
		updatedSVG = updatedSVG.replace(/fill="[^"]*"/, `fill="${properties.fill}"`);
	}

	// Replace or add stroke color
	if (properties.color) {
		updatedSVG = updatedSVG.replace(/stroke="[^"]*"/, `stroke="${properties.color}"`);
		updatedSVG = updatedSVG.replace(/color="[^"]*"/, `color="${properties.color}"`);
	}

	// Replace or add stroke width
	if (properties.strokeWidth) {
		updatedSVG = updatedSVG.replace(/stroke-width="[^"]*"/, `stroke-width="${properties.strokeWidth}"`);
	}

	return updatedSVG;
};

export function formatWithExponential(value: number, decimalPlaces = 2): string | number {
	const largeThreshold = 1e5;
	const smallThreshold = 1e-3; // Điều chỉnh ngưỡng nhỏ

	// Trường hợp số 0
	if (value === 0) {
		return Number(value.toFixed(decimalPlaces));
	}

	// Các giá trị lớn hơn largeThreshold hoặc nhỏ hơn smallThreshold sẽ dùng ký hiệu khoa học
	if (Math.abs(value) >= largeThreshold || Math.abs(value) < smallThreshold) {
		return value.toExponential(decimalPlaces);
	}

	// Các giá trị trong khoảng giữa sẽ được format số thập phân thông thường
	return Number(value.toPrecision(decimalPlaces + 1));
}

export function formatPercentage(value: number) {
	if (value % 1 === 0) return value;

	if (value >= 100) return Math.round(value);

	return Math.round(value * 10) / 10;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function areObjectsDifferent(obj1: Record<string, any> | null, obj2: Record<string, any> | null): boolean {
	// Check if either value is not an object or is null
	if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
		return obj1 !== obj2;
	}

	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	// Check if the number of keys is different
	if (keys1.length !== keys2.length) {
		return true;
	}

	// Check for differences in values recursively
	for (const key of keys1) {
		if (!keys2.includes(key) || areObjectsDifferent(obj1[key], obj2[key])) {
			return true;
		}
	}

	return false;
}

type TransformContributor = {
	processId: string;
	net?: number;
	total?: number;
	subProcesses: TransformContributor[];
};

export function transformProcesses(contributor: Contributor): TransformContributor {
	const hasSubProcesses = contributor.subProcesses.length > 0;

	const newProcess: TransformContributor = {
		processId: contributor.processId,
		subProcesses: [],
	};

	if (hasSubProcesses) {
		newProcess.total = 0;

		newProcess.subProcesses.push({
			processId: contributor.processId,
			net: contributor.net,
			subProcesses: [],
		});

		newProcess.subProcesses.push(...contributor.subProcesses.map((subProcess) => transformProcesses(subProcess)));
	} else {
		newProcess.net = contributor.net;
	}

	return newProcess;
}

export function transformProcessesv2(contributor: Contributor): TransformContributor {
	const hasSubProcesses = contributor.subProcesses.length > 0;

	const newProcess: TransformContributor = {
		processId: contributor.processId,
		subProcesses: [],
	};

	if (hasSubProcesses) {
		newProcess.total = 0;

		// Add the current process as a separate entry in subProcesses
		newProcess.subProcesses.push({
			processId: contributor.processId,
			net: contributor.net,
			subProcesses: [],
		});

		// Process subProcesses and add `processEnd` to each
		newProcess.subProcesses.push(
			...contributor.subProcesses.map((subProcess) => {
				const transformedSubProcess = transformProcessesv2(subProcess);
				return {
					...transformedSubProcess,
					processEnd: contributor.processId, // Add processEnd as the current process ID
				};
			})
		);
	} else {
		// Leaf process: only add `net` value
		newProcess.net = contributor.net;
	}

	return newProcess;
}

type Contributor = {
	processId: string;
	net: number;
	subProcesses: Contributor[];
};

export function transformNetToTotal(data: Contributor): TransformContributor {
	const hasSubProcesses = data.subProcesses && data.subProcesses.length > 0;

	// Tạo bản sao mới của dữ liệu và xử lý đệ quy các `subProcesses`
	const transformedData: TransformContributor = {
		processId: data.processId,
		subProcesses: hasSubProcesses ? data.subProcesses.map((subProcess) => transformNetToTotal(subProcess)) : [],
	};

	if (hasSubProcesses) {
		// Nếu có `subProcesses`, đổi `net` thành `total`
		transformedData.total = data.net;
	} else {
		// Nếu không có `subProcesses`, giữ lại `net`
		transformedData.net = data.net;
	}

	return transformedData;
}

export function formatNumberExponential(value: number, threshold: number = 1_000): string {
	// Trường hợp đặc biệt: Giá trị bằng 0
	if (value === 0) {
		return '0';
	}

	// Trường hợp số nhỏ hơn ngưỡng và không cần ký hiệu khoa học
	if (Math.abs(value) < threshold) {
		// Làm tròn tối đa 2 chữ số thập phân, loại bỏ .00 nếu không cần thiết
		return parseFloat(value.toFixed(2)).toString();
	}

	// Trường hợp số lớn hơn hoặc rất nhỏ (bao gồm cả số âm)
	const exponent = Math.floor(Math.log10(Math.abs(value))); // Tìm số mũ
	const base = value / Math.pow(10, exponent); // Tính phần cơ số

	// Dạng ký hiệu khoa học với làm tròn đến 2 chữ số thập phân
	return `${value > 0 ? '+' : ''}${parseFloat(base.toFixed(2))} · 10<sup>${exponent}</sup>`;
}

export function calculatePercentageDifference(value1: number, value2: number, baseValue: 'value1' | 'value2'): number {
	// Xác định giá trị base
	const base = baseValue === 'value1' ? value1 : value2;

	// Xử lý trường hợp base bằng 0
	if (base === 0) {
		// Nếu base = 0 và giá trị kia khác 0, coi là thay đổi 100%
		return 100;
	}

	// Tính chênh lệch tuyệt đối
	const difference = Math.abs(value1 - value2);

	// Tính phần trăm chênh lệch
	return (difference / base) * 100;
}

export function formatPercentage2(value: number, decimalPlaces: number = 1): string {
	const rounded = value.toFixed(decimalPlaces);
	return `${rounded}%`;
}

export function formatLargeNumber(num: number): string {
	if (num >= 1e9) {
		return (num / 1e9).toFixed(2).replace(/\.?0+$/, '') + 'B'; // Tỷ (Billion)
	} else if (num >= 1e6) {
		return (num / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M'; // Triệu (Million)
	} else if (num >= 1e3) {
		return (num / 1e3).toFixed(2).replace(/\.?0+$/, '') + 'K'; // Ngàn (Thousand)
	} else {
		return num.toString(); // Số nhỏ hơn 1,000 không thay đổi
	}
}

export function stringToColor(str: string) {
	let colour = '#';
	let hash = 0;

	for (const char of str) {
		hash = char.charCodeAt(0) + (hash << 5) - hash;
	}

	for (let i = 0; i < 3; i++) {
		const value = (hash >> (i * 8)) & 0xff;
		colour += value.toString(16).substring(-2);
	}

	return colour.substring(0, 7);
}

export function timeAgo(dateString: string): string {
	// Handle invalid date input
	const inputDate = new Date(dateString);
	if (isNaN(inputDate.getTime())) {
		return 'Invalid date';
	}

	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);

	const intervals = [
		{ label: 'year', seconds: 31536000 },
		{ label: 'month', seconds: 2592000 },
		{ label: 'week', seconds: 604800 },
		{ label: 'day', seconds: 86400 },
		{ label: 'hour', seconds: 3600 },
		{ label: 'minute', seconds: 60 },
		{ label: 'second', seconds: 1 },
	];

	for (const interval of intervals) {
		const delta = Math.floor(diffInSeconds / interval.seconds);
		if (delta > 0) {
			return `${delta} ${interval.label}${delta !== 1 ? 's' : ''} ago`;
		}
	}

	return 'just now';
}
