const Audit = {
    name: 'Audit',
    primaryKey: 'id',
    properties: {
        id: 'string',
        creationDate: 'date',
        createdBy: 'User',
        deletedBy: 'User',
        deletionDate: 'date?',
        lastUpdatedBy: 'User',
        lastModifiedDate: 'date'
    }
}

const Category = {
    name: 'Category',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        audit: 'Audit',
        deleted: 'bool'
    }
}

const Contact = {
    name: 'Contact',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string?',
        phoneNumber: 'string?',
        email: 'string?',
        businessCardImage: 'Image',
        jobTitle: 'string?',
        supplier: 'Supplier',
        audit: 'Audit',
        deleted: 'bool'
    }
}

const Event = {
    name: 'Event',
    primaryKey: 'id',
    properties: {
        id: 'string',
        alias: 'string?',
        rating: 'int?',
        description: 'EventDescription',
        audit: 'Audit',
        deleted: 'bool'
    }
}

const EventDescription = {
    name: 'EventDescription',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        description: 'string?',
        website: 'string?',
        startDate: 'date?',
        endDate: 'date?',
        countryCode: 'string?',
        venue: 'Venue',
        logoImage: 'Image',
        global: 'bool',
        supplierCount: 'int',
        industry: 'Industry',
        primaryColor: 'string?',
        secondaryColor: 'string?'
    }
}

const Image = {
    name: 'Image',
    primaryKey: 'id',
    properties: {
        id: 'string',
        fileName: 'string',
        orientation: 'int',
        imageType: 'string',
        audit: 'Audit',
        deleted: 'bool'
    }
}

const Industry = {
    name: 'Industry',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string'
    }
}

const Packaging = {
    name: 'Packaging',
    primaryKey: 'id',
    properties: {
        id: 'string',
        height: 'double?',
        width: 'double?',
        length: 'double?',
        unit: 'string?',
        itemsQuantity: 'double?',
        weight: 'double?',
        weightUnit: 'string?'
    }
}

const Price = {
    name: 'Price',
    primaryKey: 'id',
    properties: {
        id: 'string',
        currency: 'string?',
        value: 'double?',
        baseCurrencyValue: 'double?'
    }
}

const PriceMatrix = {
    name: 'PriceMatrix',
    primaryKey: 'id',
    properties: {
        id: 'string',
        rows: 'PriceMatrixRow[]'
    }
}

const PriceMatrixRow = {
    name: 'PriceMatrixRow',
    primaryKey: 'id',
    properties: {
        id: 'string',
        label: 'string?',
        price: 'Price'
    }
}

const Product = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        supplier: 'Supplier',
        images: 'Image[]',
        user: 'User',
        price: 'Price',
        category: 'Category',
        description: 'string?',
        event: 'Event',
        favorite: 'bool?',
        status: 'ProductStatus',
        tags: 'Tag[]',
        minimumOrderQuantity: 'int?',
        moqDescription: 'string?',
        votes: 'ProductVote[]',
        score: 'int?',
        innerCarton: 'Packaging',
        masterCarton: 'Packaging',
        priceMatrix: 'PriceMatrix',
        leadTimeValue: 'int?',
        leadTimeUnit: 'string?',
        sample: 'bool?',
        samplePrice: 'int?',
        archived: 'bool',
        audit: 'Audit',
        deleted: 'bool'
    }
}

const ProductStatus = {
    name: 'ProductStatus',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        final: 'bool',
        color: 'string?',
        step: 'int?'
    }
}

const ProductVote = {
    name: 'ProductVote',
    primaryKey: 'id',
    properties: {
        id: 'string',
        user: 'User',
        value: 'int'
    }
}

const Project = {
    name: 'Project',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        logoImage: 'Image',
        description: 'string?',
        products: 'Product[]',
        audit: 'Audit',
        deleted: 'bool'
    }
}

const Supplier = {
    name: 'Supplier',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        fullName: 'string?',
        description: 'string?',
        images: 'Image[]',
        logoImage: 'Image',
        supplierType: 'SupplierType',
        website: 'string?',
        phoneNumber: 'string?',
        country: 'string?',
        address: 'string?',
        officeEmail: 'string?',
        officePhone: 'string?',
        incoTerm: 'string?',
        harbour: 'string?',
        generalMOQ: 'int?',
        generalLeadTime: 'int?',
        tags: 'Tag[]',
        categories: 'Category[]',
        favorite: 'bool',
        globalDatabaseId: 'string?',
        audit: 'Audit',
        deleted: 'bool'
    }
}

const SupplierType = {
    name: 'SupplierType',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        deleted: 'bool'
    }
}

const Tag = {
    name: 'Tag',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        audit: 'Audit',
        deleted: 'bool'
    }
}

const Team = {
    name: 'Team',
    primaryKey: 'id',
    properties: {
        id: 'string',
        ownerUser: 'User',
        name: 'string',
        defaultCurrency: 'string?',
        users: 'TeamUser[]',
        creationDate: 'date'
    }
}

const TeamUser = {
    name: 'TeamUser',
    primaryKey: 'id',
    properties: {
        id: 'string',
        accessType: 'string'
    }
}

const User = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: 'string',
        firstName: 'string',
        lastName: 'string',
        phoneNumber: 'string?',
        companyName: 'string?',
        email: 'string',
        currentTeam: 'Team',
        preferredLanguage: 'string?',
        teams: 'TeamUser[]'
    }
}

const Venue = {
    name: 'Venue',
    primaryKey: 'id',
    properties: {
        id: 'string',
        city: 'string?',
        name: 'string',
        latitude: 'double?',
        country: 'string?',
        longitude: 'double?',
        addressFull: 'string?'
    }
}
export default [
    Audit, 
    Category, 
    Contact, 
    Event, 
    EventDescription, 
    Image,
    Industry,
    Packaging,
    Price,
    PriceMatrix,
    PriceMatrixRow,
    Product,
    ProductStatus,
    ProductVote,
    Project,
    Supplier,
    SupplierType,
    Tag,
    Team,
    TeamUser,
    User,
    Venue 
]