type ImpactCategory = {
	id: string;
	name: string;
	indicator: string;
	iconUrl: string;
	indicatorDescription: string;
	midpointImpactCategory: MidpointImpactCategory;
	emissionCompartment: EmissionCompartment | null;
};

type EmissionCompartment = {
	id: string;
	name: string;
	description: string;
};

type MidpointImpactCategory = {
	id: string;
	name: string;
	description?: string;
	abbr: string;
	unit: Unit;
};

type Unit = {
	id: string;
	name: string;
	conversionFactor?: number;
	unitGroup?: UnitGroup;
	default?: boolean;
};

type UnitGroup = {
	id: string;
	name: string;
	unitGroupType: string;
};

export type { ImpactCategory };
