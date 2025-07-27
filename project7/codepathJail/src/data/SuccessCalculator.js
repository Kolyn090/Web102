import Weapon from './weapon.ts'
import BodyMass from "./bodyMass.ts";
import Drinker from "./drinker.ts";
import Vision from "./vision.ts";
import HelperType from "./helperType.ts"

function successCalculator(invitedInmates) {
    var result = 100;
    // For each inmate in your squad, -20%
    result -= invitedInmates.length * 20;
    var hasLocksmith = false;
    var hasWatchman = false;

    var weaponTable = {
        [Weapon.None] : 0,
        [Weapon.Mop] : 5,
        [Weapon.Knife] : 10,
        [Weapon.Shovel] : 10
    }

    var bodyMassTable = {
        [BodyMass.Thin] : -10,
        [BodyMass.Bulky] : 5,
        [BodyMass.Muscular] : 15
    }

    var drinkerTable = {
        [Drinker.None] : 20,
        [Drinker.Coffee] : -30,
        [Drinker.Tea] : -10,
        [Drinker.Alcohol] : -50
    }

    var visionTable = {
        [Vision.Blind] : -100,
        [Vision.Impaired] : -20,
        [Vision.Perfect] : 20
    }

    invitedInmates.forEach(mate => {
        // Year in prison
        // year: [0, 10], chance: [-5, 20]
        result += interpolate(0, 10, -10, 20, mate.years);

        // For hitman
        // Weapon
        // - none +0%
        // - mop +5%
        // - knife +10%
        // - shovel +10%
        // Body Mass
        // - thin -10%
        // - bulky +5%
        // - muscular +15%
        // Weightlifting
        // 100 kg (+20% max)
        if (mate.helperType == HelperType.Hitman)
        {
            var mateWeapon = mate.weapon;
            if (mateWeapon in weaponTable)
            {
                result += weaponTable[mateWeapon];
            }
            var mateBodyMass = mate.bodyMass;
            if (mateBodyMass in bodyMassTable)
            {
                result += bodyMassTable[mateBodyMass];
            }
            result += interpolate(0, 100, 0, 20, mate.weightlifting ? mate.weightlifting : 0);
        }

        // For locksmith +20% (once)
        // Experience 
        // 50 (+20% max)
        else if (mate.helperType == HelperType.Locksmith)
        {
            if (!hasLocksmith)
            {
                hasLocksmith = true;
                result += 20;
            }
            result += interpolate(0, 50, 0, 20, mate.experience ? mate.experience : 0);
        }

        // For watchman +10% (once)
        // Drink
        // - none +20%
        // - coffee -30%
        // - tea -10%
        // - alcohol -50%
        // Vision
        // - blind -100%
        // - impaired -20%
        // - perfect +20%
        // Height
        // 180 cm (+10% max)
        else if (mate.helperType == HelperType.Watchman)
        {
            if (!hasWatchman)
            {
                hasWatchman = true;
                result += 10;
            }
            var mateDrink = mate.drink;
            if (mateDrink in drinkerTable)
            {
                result += drinkerTable[mateDrink];
            }
            var mateVision = mate.vision;
            if (mateVision in visionTable)
            {
                result += visionTable[mateVision];
            }
            result += interpolate(0, 180, 0, 10, mate.height ? mate.height : 0);
        }
    });

    return interpolate(0, 100, 0, 100, result);
}

function interpolate(a, b, c, d, e) {
    // Clamp e between a and b
    const minAB = Math.min(a, b);
    const maxAB = Math.max(a, b);
    const clampedE = Math.max(minAB, Math.min(maxAB, e));

    // Normalize e in [a, b]
    const t = (clampedE - a) / (b - a);

    // Interpolate to [c, d]
    return c + t * (d - c);
}

export default successCalculator;
