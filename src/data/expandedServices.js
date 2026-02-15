import { servicesData } from './services.js';

// Service expansion configurations
const expansionConfigs = {
    // Raids can have multiple runs and service types
    'Raids': {
        hasRunCounts: true,
        hasServiceType: true,
        hasSpeed: true
    },
    // Dungeons can have multiple runs and service types
    'Dungeons': {
        hasRunCounts: true,
        hasServiceType: true,
        hasSpeed: true
    },
    // Trials can have multiple runs
    'Trials': {
        hasRunCounts: true,
        hasServiceType: true,
        hasSpeed: true
    },
    // PvE activities
    'PvE': {
        hasRunCounts: true,
        hasSpeed: true
    },
    // Crucible services
    'Crucible': {
        hasServiceType: true,
        hasSpeed: true
    },
    // Gambit services
    'Gambit': {
        hasRunCounts: true,
        hasSpeed: true
    },
    // Vanguard services
    'Vanguard': {
        hasRunCounts: true,
        hasSpeed: true
    }
};

// Run count variations
const runCountOptions = [
    { count: 1, multiplier: 1.0, suffix: '', id: '' },
    { count: 3, multiplier: 2.5, suffix: ' (3 Runs)', id: '-3runs' },
    { count: 5, multiplier: 4.0, suffix: ' (5 Runs)', id: '-5runs' },
    { count: 10, multiplier: 7.0, suffix: ' (10 Runs)', id: '-10runs' }
];

// Speed variations
const speedOptions = [
    { type: 'Normal', multiplier: 1.0, suffix: '', id: '' },
    { type: 'Express', multiplier: 1.4, suffix: ' [Express 24-48h]', id: '-express', duration: '24-48 hours' },
    { type: 'Super Express', multiplier: 1.8, suffix: ' [Super Express]', id: '-superexpress', duration: 'Same Day' }
];

// Service type variations
const serviceTypeOptions = [
    { type: 'Recovery', multiplier: 1.0, suffix: '', id: '', description: 'We play on your account' },
    { type: 'Sherpa', multiplier: 0.85, suffix: ' (Sherpa)', id: '-sherpa', description: 'Play with our team' }
];

/**
 * Generate all service variations
 */
function generateServiceVariations(baseService) {
    const variations = [];
    const config = expansionConfigs[baseService.category] || {};
    
    // Determine which variations to create
    const runCounts = config.hasRunCounts ? runCountOptions : [runCountOptions[0]];
    const speeds = config.hasSpeed ? speedOptions : [speedOptions[0]];
    const serviceTypes = config.hasServiceType ? serviceTypeOptions : [serviceTypeOptions[0]];
    
    // Generate all combinations
    runCounts.forEach(run => {
        speeds.forEach(speed => {
            serviceTypes.forEach(serviceType => {
                // Skip base service duplicate (all defaults)
                if (run.count === 1 && speed.type === 'Normal' && serviceType.type === 'Recovery') {
                    // This is the base service, add it as-is
                    variations.push(baseService);
                    return;
                }
                
                // Calculate final price
                const totalMultiplier = run.multiplier * speed.multiplier * serviceType.multiplier;
                const finalPrice = parseFloat((baseService.price * totalMultiplier).toFixed(2));
                
                // Create unique ID
                const newId = `${baseService.id}${run.id}${speed.id}${serviceType.id}`;
                
                // Create name suffix
                const nameSuffix = `${run.suffix}${speed.suffix}${serviceType.suffix}`;
                
                // Create variation
                const variation = {
                    ...baseService,
                    id: newId,
                    name: `${baseService.name}${nameSuffix}`,
                    price: finalPrice,
                    originalPrice: baseService.price,
                    duration: speed.duration || baseService.duration,
                    description: `${baseService.description}${serviceType.description ? ` (${serviceType.description})` : ''}`,
                    variation: {
                        runs: run.count,
                        speed: speed.type,
                        serviceType: serviceType.type,
                        isVariation: true
                    }
                };
                
                variations.push(variation);
            });
        });
    });
    
    return variations;
}

/**
 * Expand all services
 */
export function expandAllServices() {
    const expandedServices = [];
    
    servicesData.forEach(service => {
        const variations = generateServiceVariations(service);
        expandedServices.push(...variations);
    });
    
    return expandedServices;
}

/**
 * Get expanded services (memoized)
 */
let cachedExpandedServices = null;

export function getExpandedServices() {
    if (!cachedExpandedServices) {
        cachedExpandedServices = expandAllServices();
    }
    return cachedExpandedServices;
}

/**
 * Get service count
 */
export function getServiceCount() {
    return getExpandedServices().length;
}

/**
 * Get services by category
 */
export function getServicesByCategory(category) {
    return getExpandedServices().filter(service => service.category === category);
}

/**
 * Get service by ID
 */
export function getServiceById(id) {
    return getExpandedServices().find(service => service.id === id);
}

/**
 * Get popular services
 */
export function getPopularServices(limit = 6) {
    return getExpandedServices()
        .filter(service => service.popular && !service.variation?.isVariation)
        .slice(0, limit);
}

// Export the expanded services as default
export const expandedServicesData = getExpandedServices();

// Log service count for debugging
console.log(`?? Total Services: ${getServiceCount()}`);
console.log(`?? Base Services: ${servicesData.length}`);
console.log(`? Generated Variations: ${getServiceCount() - servicesData.length}`);
