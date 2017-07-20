class Grandparent
{
  constructor (name, hairColor, eyeColor, vertical)
  {
    this.name = name;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.vertical = vertical;
  };
};

class Parent extends Grandparent
{
  constructor (name, hairColor, eyeColor, vertical)
  {
    super(name, hairColor, eyeColor, vertical);
  };
};

class Child extends Parent
{
  constructor (name, hairColor, eyeColor, vertical)
  {
    super(name, hairColor, eyeColor, vertical);
  };
};

let arthur = new Grandparent ('Arthur', 'Brown', 'Brown', 12);
let cameron = new Parent ('Cameron', 'Brown', 'Blue', 14);
let roland = new Child ('Roland', 'Brown', 'Blue', 9);

let familyVertical = {
  'Arthur': arthur.vertical,
  'Cameron': cameron.vertical,
  'Roland': roland.vertical};

for (var i in familyVertical)
{
  console.log(`${i} can jump ${familyVertical[i]} inches off the ground!`);
};
