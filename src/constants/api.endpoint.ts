class AUTH_ENDPOINT {
	public static LOGIN = 'users/login';
	public static LOGOUT = 'users/logout';
	public static REGISTER = 'users/register';
	public static VERIFY_EMAIL = 'users/email-verify';
}

// Impact endpoint
class IMPACT_ENDPOINT {
	public static IMPACT = '/impacts';
}

// Impact method endpoint
class IMPACT_METHOD_ENDPOINT {
	public static IMPACT_METHODS = '/impact-methods';
	public static GET_IMPACT_METHODS = IMPACT_ENDPOINT.IMPACT + this.IMPACT_METHODS;
}

// Impact method category endpoint
class IMPACT_METHOD_CATEGORIES_ENDPOINT {
	public static IMPACT_CATEGORIES = '/impact-categories';

	public static GET_IMPACT_CATEGORIES_BY_METHOD_ID(id: string) {
		return IMPACT_ENDPOINT.IMPACT + IMPACT_METHOD_ENDPOINT.IMPACT_METHODS + `/${id}` + this.IMPACT_CATEGORIES;
	}
}

// Project endpoint
class PROJECT_ENDPOINT {
	public static PROJECT = '/projects';

	public static CREATE_NEW_PROJECT = this.PROJECT;
	public static UPDATE_PROJECT = this.PROJECT;
	public static CALCULATE_PROJECT = '/calculation';
	public static FAVORITE = '/favorite';
	public static EXPORT = '/export';
}

class WORKSPACE_ENDPOINT {
	public static WORKSPACE = '/workspaces';
}

class LIFE_CYCLE_STAGES_ENDPOINT {
	public static LIFE_CYCLE_STAGES = '/life-cycle-stages';
}

class EMISSION_SUBSTANCES_ENDPOINT {
	public static EMISSION_SUBSTANCES = '/emission-substance';
}

class EXCHANGE_ENDPOINT {
	public static EXCHANGE = '/exchanges';
	public static PRODUCT_EXCHANGE = '/product-exchange';
	public static ELEMENTARY_EXCHANGE = '/elementary-exchange';
}

class EMISSIONS {
	public static EMISSIONS = '/emissions';
	public static EMISSIONS_COMPARTMENT = this.EMISSIONS + '/emission-compartments';
}

class UNIT {
	public static UNIT = '/units';
	public static UNIT_GROUP = '/unit-groups';
}

class PROCESS {
	public static PROCESS = '/process';
}

class CONNECTOR {
	public static CONNECTOR = '/connectors';
}

class OBJECT_LIBRARY {
	public static OBJECT_LIBRARY = '/object-library';
}

export {
	OBJECT_LIBRARY,
	WORKSPACE_ENDPOINT,
	CONNECTOR,
	PROCESS,
	UNIT,
	EMISSIONS,
	EXCHANGE_ENDPOINT,
	EMISSION_SUBSTANCES_ENDPOINT,
	AUTH_ENDPOINT,
	IMPACT_METHOD_ENDPOINT,
	IMPACT_ENDPOINT,
	IMPACT_METHOD_CATEGORIES_ENDPOINT,
	PROJECT_ENDPOINT,
	LIFE_CYCLE_STAGES_ENDPOINT,
};
