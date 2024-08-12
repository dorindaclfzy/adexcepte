function map(value, in_min, in_max, out_min, out_max) {
    return out_min + ((value - in_min) * (out_max - out_min)) / (in_max - in_min);
}

// Usage
const fsr = 50; // Example input value
const fsr_velocity_limit = 100;
let velocity = map(fsr, 0, fsr_velocity_limit, 0, 127);

console.log(velocity); // Output: 63.5
