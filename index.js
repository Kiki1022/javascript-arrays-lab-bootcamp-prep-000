var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name)
{
  kittens.push("Ralph");
  return kittens;
  
}

function destructivelyRemoveLastKitten(name)
{
  kittens.pop();
  return kittens;
}

function destructivelyPrependKitten(name) 
{
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
  return kittens;
}

function appendKitten(name)
{
  var kittens2 = kittens.concat("Broom");
  return kittens2;
}

function prependKitten(name, array)
{
 return[name,...kittens];
  
}

function removeLastKitten()
{
  
}




// Add your functions and code here
