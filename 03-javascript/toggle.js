// Clousure: Una función que crea un interruptor de encendido/apagado
// utilizando cierres.
function makeToggle(initial = false) {
  let value = initial;
  return {
    get: () => value,
    toggle: () => (value = !value),
  };
}

const light = makeToggle(true);

console.log("Estado inicial:", light.get());
light.toggle();
console.log("Después de toggle:", light.get());
light.toggle();
console.log("Después de segundo toggle:", light.get());
