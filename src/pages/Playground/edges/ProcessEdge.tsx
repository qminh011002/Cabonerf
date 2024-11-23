import { CabonerfEdgeData } from '@/@types/cabonerfEdge.type';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { PlaygroundControlContext } from '@/pages/Playground/contexts/playground-control.context';
import { PlaygroundContext } from '@/pages/Playground/contexts/playground.context';
import socket from '@/socket.io';
import { formatPercentage } from '@/utils/utils';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { BaseEdge, Edge, EdgeLabelRenderer, EdgeProps, getSimpleBezierPath, useReactFlow } from '@xyflow/react';
import { Ellipsis } from 'lucide-react';
import React, { useContext, useEffect, useMemo, useState } from 'react';

type CustomEdge = Edge<CabonerfEdgeData, 'process'>;

type Gradient = {
	start: string;
	end: string;
	startPercentage: number;
	endPercentage: number;
};

const gradientColors: Gradient[] = [
	{ start: '#000000', end: '#333333', startPercentage: 0, endPercentage: 10 }, // Darker Black to Lighter Black
	{ start: '#94dbea', end: '#c2ebf4', startPercentage: 10, endPercentage: 20 }, // Light Cyan to Lighter Cyan
	{ start: '#78b6d1', end: '#a0cee0', startPercentage: 20, endPercentage: 30 }, // Soft Mint Green to Lighter Mint
	{ start: '#709ed0', end: '#9db9e0', startPercentage: 30, endPercentage: 40 }, // Pastel Green to Lighter Teal
	{ start: '#f1cd55', end: '#f6de88', startPercentage: 40, endPercentage: 50 }, // Gentle Yellow to Softer Yellow
	{ start: '#f2b84c', end: '#f6cf85', startPercentage: 50, endPercentage: 60 }, // Pastel Yellow to Lighter Yellow
	{ start: '#e48c3f', end: '#f2b077', startPercentage: 60, endPercentage: 70 }, // Peachy Orange to Softer Orange
	{ start: '#ec8978', end: '#f2b3aa', startPercentage: 70, endPercentage: 80 }, // Coral Pink to Softer Coral
	{ start: '#cb6e5e', end: '#e29b91', startPercentage: 80, endPercentage: 90 }, // Soft Red to Lighter Red
	{ start: '#bb4e3a', end: '#d38174', startPercentage: 90, endPercentage: 100 }, // Bold Red to Lighter Dusty Rose
];

function getGradient(percentage: number): Gradient {
	if (percentage < 0 || percentage > 100) {
		return { start: '#000', end: '#000', startPercentage: 0, endPercentage: 0 };
	}
	return (
		gradientColors.find(
			(gradient) => percentage >= gradient.startPercentage && (percentage < gradient.endPercentage || gradient.endPercentage === 100)
		) || { start: '#000', end: '#000', startPercentage: 0, endPercentage: 0 }
	);
}

function ProcessEdge(data: EdgeProps<CustomEdge>) {
	const {
		playgroundState: { impactCategory },
	} = useContext(PlaygroundContext);

	const {
		playgroundControlState: { selectedTriggerId, edgeContributions, impacts, processes },
	} = useContext(PlaygroundControlContext);

	const { deleteElements } = useReactFlow();

	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

	const [path, labelX, labelY] = getSimpleBezierPath({
		sourceX: data.sourceX,
		sourceY: data.sourceY,
		sourcePosition: data.sourcePosition,
		targetX: data.targetX,
		targetY: data.targetY,
		targetPosition: data.targetPosition,
	});

	const actualPercentage = useMemo(() => {
		const totalValue = impacts?.find((i) => i.impactCategory.id === impactCategory?.id)?.value;
		const actualNet = edgeContributions.find((e) => e.processId === data.source);
		const process = processes?.find((p) => p.id === actualNet?.processId);
		const impact = process?.impacts?.find((z) => z.impactCategory.id === impactCategory?.id);
		const unitProcess = impact?.unitLevel;

		if (unitProcess && totalValue) {
			return Math.min((unitProcess / totalValue) * 100, 100); // Clamp to 100
		}
		return 0; // Default to 0 if invalid
	}, [data.source, edgeContributions, impactCategory?.id, impacts, processes]);

	const gradient = useMemo(() => getGradient(actualPercentage), [actualPercentage]);

	const handleMouseEnter = () => setIsOpenMenu(true);
	const handleMouseLeave = () => setIsOpenMenu(false);

	useEffect(() => {
		socket.on('gateway:connector-deleted', (data) => {
			deleteElements({
				edges: [{ id: data }],
			});
		});
	}, [deleteElements]);

	const handleDeleteEdge = (id: string) => {
		socket.emit('gateway:connector-delete', id);
	};

	return (
		<>
			<g onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				{selectedTriggerId === '2' ? (
					<>
						<svg style={{ position: 'absolute', width: '0', height: '0' }}>
							<defs>
								<linearGradient id={`edgeGradient-${data.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
									<stop
										offset="0%"
										style={{
											stopColor: gradient.start || '#000',
											stopOpacity: 0.7, // Opacity for the start color (0.7 = 70% opacity)
										}}
									/>
									<stop
										offset="100%"
										style={{
											stopColor: gradient.end || '#000',
											stopOpacity: 0.3, // Opacity for the end color (0.3 = 30% opacity)
										}}
									/>
								</linearGradient>
							</defs>
						</svg>

						<BaseEdge
							path={path}
							style={{
								stroke: `url(#edgeGradient-${data.id})`, // Reference unique gradient id
								strokeWidth: (actualPercentage as number) / 2 || 3, // Avoid zero width
							}}
						/>
					</>
				) : (
					<BaseEdge path={path} {...data} />
				)}

				<EdgeLabelRenderer>
					{selectedTriggerId === '2' ? (
						<div
							style={{
								position: 'absolute',
								zIndex: 50,
								transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
								backgroundColor: gradient.start,
							}}
							className="rounded-full px-1.5 text-base font-bold text-white"
						>
							{formatPercentage(actualPercentage as number)}%
						</div>
					) : (
						isOpenMenu && (
							<DropdownMenu>
								<DropdownMenuTrigger
									style={{
										position: 'absolute',
										zIndex: 50,
										transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
										pointerEvents: 'auto',
										backgroundColor: '#fff',
										color: '#000',
									}}
									className={`rounded-full p-1`}
								>
									<Ellipsis size={20} />
								</DropdownMenuTrigger>

								<DropdownMenuContent className="absolute -left-2 -top-2">
									<DropdownMenuLabel>Edit edge</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<button onClick={() => handleDeleteEdge(data.id)}>Delete</button>
								</DropdownMenuContent>
							</DropdownMenu>
						)
					)}
				</EdgeLabelRenderer>
			</g>
		</>
	);
}

export default React.memo(ProcessEdge);
