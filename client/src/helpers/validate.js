export function validation(create) {
  let errors = {};

  if (
    create.name.trim() === "" ||
    create.name.split(" ").length > 1 ||
    create.name.length > 10 ||
    create.name.length < 3 ||
    !isNaN(create.name)
  ) {
    errors.name = "debe ser un solo nombre entre 3 y 10 caracteres";
  }
  const attack = parseInt(create.attack);
  const defense = parseInt(create.defense);
  const hp = parseInt(create.hp);
  if (isNaN(attack) || attack < 1 || attack > 999) {
    errors.attack = "El ataque debe ser un número entre 1 y 999";
  }
  if (isNaN(defense) || defense < 1 || defense > 999) {
    errors.defense = "La defensa debe ser un número entre 1 y 999";
  }
  if (isNaN(hp) || hp < 1 || hp > 999) {
    errors.hp = "Los puntos de vida deben ser un número entre 1 y 999";
  }
  return errors;
}
