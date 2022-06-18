/* Vamos a hacer un generador de nombres de superhéroe. Pide al usuario la fecha de
nacimiento, el nombre y el apellido. Muestra el nombre de superhéroe de la siguiente
manera: la primera letra del nombre indicará la propiedad del objeto letraNombre
que debes obtener, la última letra del apellido indicará la propiedad del objeto
letraApellido que debes obtener y último número del año de la fecha de nacimiento
indicará la propiedad del objeto fechaNacimiento que debes obtener. Pregúntale
también al usuario si quiere el nombre masculino o femenino. Muestra el nombre
conseguido.
Por ejemplo, si yo me llamo “Rucesio”, mi nombre de superhéroe empezará con el
valor de la propiedad ‘r’. */


let letraNombre = {
    a: {
      letra: "a",
      masculino: "La bestia",
      femenino: "La bestia",
    },
    b: {
      letra: "b",
      masculino: "Agente",
      femenino: "Agente",
    },
    c: {
      letra: "c",
      masculino: "Gigante",
      femenino: "Gigante",
    },
    d: {
      letra: "d",
      masculino: "Pokemon",
      femenino: "Pokemon",
    },
    e: {
      letra: "e",
      masculino: "Dragón",
      femenino: "Dragón",
    },
    f: {
      letra: "f",
      masculino: "Alien",
      femenino: "Alien",
    },
    g: {
      letra: "g",
      masculino: "Fantasma",
      femenino: "Fantasma",
    },
    h: {
      letra: "h",
      masculino: "Doctor",
      femenino: "Doctora",
    },
    i: {
      letra: "i",
      masculino: "Genio",
      femenino: "Genia",
    },
    j: {
      letra: "j",
      masculino: "Chico",
      femenino: "Chica",
    },
    k: {
      letra: "k",
      masculino: "Príncipe",
      femenino: "Princesa",
    },
    l: {
      letra: "l",
      masculino: "Hombre",
      femenino: "Mujer",
    },
    m: {
      letra: "m",
      masculino: "Gatito",
      femenino: "Gatita",
    },
    n: {
      letra: "n",
      masculino: "Borracho",
      femenino: "Borracha",
    },
    o: {
      letra: "o",
      masculino: "Rey",
      femenino: "Reina",
    },
    p: {
      letra: "p",
      masculino: "Robot",
      femenino: "Robot",
    },
    q: {
      letra: "q",
      masculino: "Científico",
      femenino: "Científica",
    },
    r: {
      letra: "r",
      masculino: "Samurai",
      femenino: "Samurai",
    },
    s: {
      letra: "s",
      masculino: "Mole",
      femenino: "Mole",
    },
    t: {
      letra: "t",
      masculino: "Loco",
      femenino: "Loca",
    },
    u: {
      letra: "u",
      masculino: "Vigilante",
      femenino: "Vigilante",
    },
    v: {
      letra: "v",
      masculino: "Guerrero",
      femenino: "Guerrera",
    },
    w: {
      letra: "w",
      masculino: "León",
      femenino: "Leona",
    },
    x: {
      letra: "x",
      masculino: "Ángel",
      femenino: "Ángel",
    },
    y: {
      letra: "y",
      masculino: "Tigre",
      femenino: "Tigresa",
    },
    z: {
      letra: "z",
      masculino: "Saiyajin",
      femenino: "Saiyajin",
    },
  };
  
  let letraApellido = {
    a: {
      letra: "a",
      masculino: "indestructible",
      femenino: "indestructible",
    },
    b: {
      letra: "b",
      masculino: "maravilla",
      femenino: "maravilla",
    },
    c: {
      letra: "c",
      masculino: "radiactivo",
      femenino: "radiactiva",
    },
    d: {
      letra: "d",
      masculino: "volador",
      femenino: "voladora",
    },
    e: {
      letra: "e",
      masculino: "mágico",
      femenino: "mágica",
    },
    f: {
      letra: "f",
      masculino: "salvaje",
      femenino: "salvaje",
    },
    g: {
      letra: "g",
      masculino: "vengador",
      femenino: "vengadora",
    },
    h: {
      letra: "h",
      masculino: "letal",
      femenino: "letal",
    },
    i: {
      letra: "i",
      masculino: "poderoso",
      femenino: "poderosa",
    },
    j: {
      letra: "j",
      masculino: "amoroso",
      femenino: "amorosa",
    },
    k: {
      letra: "k",
      masculino: "oscuro",
      femenino: "oscura",
    },
    l: {
      letra: "l",
      masculino: "fantástico",
      femenino: "fantástica",
    },
    m: {
      letra: "m",
      masculino: "invencible",
      femenino: "invencible",
    },
    n: {
      letra: "n",
      masculino: "valiente",
      femenino: "valiente",
    },
    o: {
      letra: "o",
      masculino: "superveloz",
      femenino: "superveloz",
    },
    p: {
      letra: "p",
      masculino: "invisible",
      femenino: "invisible",
    },
    q: {
      letra: "q",
      masculino: "mutante",
      femenino: "mutante",
    },
    r: {
      letra: "r",
      masculino: "tóxico",
      femenino: "tóxica",
    },
    s: {
      letra: "s",
      masculino: "sexy",
      femenino: "sexy",
    },
    t: {
      letra: "t",
      masculino: "asesino",
      femenino: "asesina",
    },
    u: {
      letra: "u",
      masculino: "karateka",
      femenino: "karateka",
    },
    v: {
      letra: "v",
      masculino: "galáctico",
      femenino: "galáctica",
    },
    w: {
      letra: "w",
      masculino: "carismático",
      femenino: "carismática",
    },
    x: {
      letra: "x",
      masculino: "violento",
      femenino: "violenta",
    },
    y: {
      letra: "y",
      masculino: "nocturno",
      femenino: "nocturna",
    },
    z: {
      letra: "z",
      masculino: "venenoso",
      femenino: "venenosa",
    },
  };
  
  let fechaNacimiento = {
    num0: {
      numero: 0,
      masculino: "del espacio",
      femenino: "del espacio",
    },
    num1: {
      numero: 1,
      masculino: "de la justicia",
      femenino: "de la justicia",
    },
    num2: {
      numero: 2,
      masculino: "de Marvel",
      femenino: "de Marvel",
    },
    num3: {
      numero: 3,
      masculino: "de las tinieblas",
      femenino: "de las tinieblas",
    },
    num4: {
      numero: 4,
      masculino: "de fuego",
      femenino: "de fuego",
    },
    num5: {
      numero: 5,
      masculino: "de la noche",
      femenino: "de la noche",
    },
    num6: {
      numero: 6,
      masculino: "del futuro",
      femenino: "del futuro",
    },
    num7: {
      numero: 7,
      masculino: "de acero",
      femenino: "de acero",
    },
    num8: {
      numero: 8,
      masculino: "exterminador",
      femenino: "exterminadora",
    },
    num9: {
      numero: 9,
      masculino: "de otro planeta",
      femenino: "de otro planeta",
    },
  };
  
  let superHeroe = ''
  let fecha = window.prompt('Por favor, introduzca su fecha de nacimiento. Ej: 01/01/1990')
  let heroe = {
    nombre: window.prompt('Por favor, introduzca su nombre').substring(0,1),
    apellido: window.prompt('Por favor, introduzca su apellido').substring(0,1),
    sexo: window.prompt('Seleccione el tipo de nombre desea generar: Masculino o femenino').toUpperCase().substring(0,1),
    year: parseInt(fecha.substring(fecha.length - 1)),    
};


//NOMBRE

if (heroe.nombre === letraNombre.a.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.a.femenino} `)
  : (superHeroe += `${letraNombre.a.masculino} `)

}else if (heroe.nombre === letraNombre.b.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.b.femenino} `)
  : (superHeroe += `${letraNombre.b.masculino} `)

}else if(heroe.nombre === letraNombre.c.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.c.femenino} `)
  : (superHeroe += `${letraNombre.c.masculino} `)

}else if(heroe.nombre === letraNombre.d.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.d.femenino} `)
  : (superHeroe += `${letraNombre.d.masculino} `)

}else if(heroe.nombre === letraNombre.e.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.e.femenino} `)
  : (superHeroe += `${letraNombre.e.masculino} `)

}else if(heroe.nombre === letraNombre.f.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.f.femenino} `)
  : (superHeroe += `${letraNombre.f.masculino} `)

}else if(heroe.nombre === letraNombre.g.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.g.femenino} `)
  : (superHeroe += `${letraNombre.g.masculino} `)

}else if(heroe.nombre === letraNombre.h.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.h.femenino} `)
  : (superHeroe += `${letraNombre.h.masculino} `)

}else if(heroe.nombre === letraNombre.i.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.i.femenino} `)
  : (superHeroe += `${letraNombre.i.masculino} `)

}else if(heroe.nombre === letraNombre.j.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.j.femenino} `)
  : (superHeroe += `${letraNombre.j.masculino} `)

}else if(heroe.nombre === letraNombre.k.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.k.femenino} `)
  : (superHeroe += `${letraNombre.k.masculino} `)

}else if(heroe.nombre === letraNombre.l.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.l.femenino} `)
  : (superHeroe += `${letraNombre.l.masculino} `)

}else if(heroe.nombre === letraNombre.m.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.m.femenino} `)
  : (superHeroe += `${letraNombre.m.masculino} `)

}else if(heroe.nombre === letraNombre.n.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.n.femenino} `)
  : (superHeroe += `${letraNombre.n.masculino} `)

}else if(heroe.nombre === letraNombre.o.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.o.femenino} `)
  : (superHeroe += `${letraNombre.o.masculino} `)

}else if(heroe.nombre === letraNombre.p.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.p.femenino} `)
  : (superHeroe += `${letraNombre.p.masculino} `)

}else if(heroe.nombre === letraNombre.q.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.q.femenino} `)
  : (superHeroe += `${letraNombre.q.masculino} `)

}else if(heroe.nombre === letraNombre.r.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.r.femenino} `)
  : (superHeroe += `${letraNombre.r.masculino} `)

}else if(heroe.nombre === letraNombre.s.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.s.femenino} `)
  : (superHeroe += `${letraNombre.s.masculino} `)

}else if(heroe.nombre === letraNombre.t.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.t.femenino} `)
  : (superHeroe += `${letraNombre.t.masculino} `)

}else if(heroe.nombre === letraNombre.u.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.u.femenino} `)
  : (superHeroe += `${letraNombre.u.masculino} `)

}else if(heroe.nombre === letraNombre.v.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.v.femenino} `)
  : (superHeroe += `${letraNombre.v.masculino} `)

}else if(heroe.nombre === letraNombre.w.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.w.femenino} `)
  : (superHeroe += `${letraNombre.w.masculino} `)

}else if(heroe.nombre === letraNombre.x.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.x.femenino} `)
  : (superHeroe += `${letraNombre.x.masculino} `)

}else if(heroe.nombre === letraNombre.y.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.y.femenino} `)
  : (superHeroe += `${letraNombre.y.masculino} `)

}else if(heroe.nombre === letraNombre.z.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraNombre.z.femenino} `)
  : (superHeroe += `${letraNombre.z.masculino} `)

}


//APELLIDO

if (heroe.apellido === letraApellido.a.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.a.femenino} `)
  : (superHeroe += `${letraApellido.a.masculino} `)

}else if (heroe.apellido === letraApellido.b.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.b.femenino} `)
  : (superHeroe += `${letraApellido.b.masculino} `)

}else if(heroe.apellido === letraApellido.c.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.c.femenino} `)
  : (superHeroe += `${letraApellido.c.masculino} `)

}else if(heroe.apellido === letraApellido.d.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.d.femenino} `)
  : (superHeroe += `${letraApellido.d.masculino} `)

}else if(heroe.apellido === letraApellido.e.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.e.femenino} `)
  : (superHeroe += `${letraApellido.e.masculino} `)

}else if(heroe.apellido === letraApellido.f.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.f.femenino} `)
  : (superHeroe += `${letraApellido.f.masculino} `)

}else if(heroe.apellido === letraApellido.g.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.g.femenino} `)
  : (superHeroe += `${letraApellido.g.masculino} `)

}else if(heroe.apellido === letraApellido.h.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.h.femenino} `)
  : (superHeroe += `${letraApellido.h.masculino} `)

}else if(heroe.apellido === letraApellido.i.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.i.femenino} `)
  : (superHeroe += `${letraApellido.i.masculino} `)

}else if(heroe.apellido === letraApellido.j.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.j.femenino} `)
  : (superHeroe += `${letraApellido.j.masculino} `)

}else if(heroe.apellido === letraApellido.k.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.k.femenino} `)
  : (superHeroe += `${letraApellido.k.masculino} `)

}else if(heroe.apellido === letraApellido.l.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.l.femenino} `)
  : (superHeroe += `${letraApellido.l.masculino} `)

}else if(heroe.apellido === letraApellido.m.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.m.femenino} `)
  : (superHeroe += `${letraApellido.m.masculino} `)

}else if(heroe.apellido === letraApellido.n.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.n.femenino} `)
  : (superHeroe += `${letraApellido.n.masculino} `)

}else if(heroe.apellido === letraApellido.o.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.o.femenino} `)
  : (superHeroe += `${letraApellido.o.masculino} `)

}else if(heroe.apellido === letraApellido.p.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.p.femenino} `)
  : (superHeroe += `${letraApellido.p.masculino} `)

}else if(heroe.apellido === letraApellido.q.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.q.femenino} `)
  : (superHeroe += `${letraApellido.q.masculino} `)

}else if(heroe.apellido === letraApellido.r.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.r.femenino} `)
  : (superHeroe += `${letraApellido.r.masculino} `)

}else if(heroe.apellido === letraApellido.s.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.s.femenino} `)
  : (superHeroe += `${letraApellido.s.masculino} `)

}else if(heroe.apellido === letraApellido.t.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.t.femenino} `)
  : (superHeroe += `${letraApellido.t.masculino} `)

}else if(heroe.apellido === letraApellido.u.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.u.femenino} `)
  : (superHeroe += `${letraApellido.u.masculino} `)

}else if(heroe.apellido === letraApellido.v.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.v.femenino} `)
  : (superHeroe += `${letraApellido.v.masculino} `)

}else if(heroe.apellido === letraApellido.w.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.w.femenino} `)
  : (superHeroe += `${letraApellido.w.masculino} `)

}else if(heroe.apellido === letraApellido.x.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.x.femenino} `)
  : (superHeroe += `${letraApellido.x.masculino} `)

}else if(heroe.apellido === letraApellido.y.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.y.femenino} `)
  : (superHeroe += `${letraApellido.y.masculino} `)

}else if(heroe.apellido === letraApellido.z.letra) {
  heroe.sexo === 'F'
  ? (superHeroe += `${letraApellido.z.femenino} `)
  : (superHeroe += `${letraApellido.z.masculino} `)

}


//FECHA

if(heroe.year === fechaNacimiento.num0.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num0.femenino}`)
  : (superHeroe += `${fechaNacimiento.num0.masculino}`)
}

else if(heroe.year === fechaNacimiento.num1.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num1.femenino}`)
  : (superHeroe += `${fechaNacimiento.num1.masculino}`)
}

else if(heroe.year === fechaNacimiento.num2.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num2.femenino}`)
  : (superHeroe += `${fechaNacimiento.num2.masculino}`)
}

else if(heroe.year === fechaNacimiento.num3.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num3.femenino}`)
  : (superHeroe += `${fechaNacimiento.num3.masculino}`)
}

else if(heroe.year === fechaNacimiento.num4.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num4.femenino}`)
  : (superHeroe += `${fechaNacimiento.num4.masculino}`)
}

else if(heroe.year === fechaNacimiento.num5.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num5.femenino}`)
  : (superHeroe += `${fechaNacimiento.num5.masculino}`)
}

else if(heroe.year === fechaNacimiento.num6.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num6.femenino}`)
  : (superHeroe += `${fechaNacimiento.num6.masculino}`)
}

else if(heroe.year === fechaNacimiento.num7.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num7.femenino}`)
  : (superHeroe += `${fechaNacimiento.num7.masculino}`)
}

else if(heroe.year === fechaNacimiento.num8.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num8.femenino}`)
  : (superHeroe += `${fechaNacimiento.num8.masculino}`)
}

else if(heroe.year === fechaNacimiento.num9.numero) {
  heroe.year === 'F'
  ? (superHeroe += `${fechaNacimiento.num9.femenino}`)
  : (superHeroe += `${fechaNacimiento.num9.masculino}`)
}


console.log(superHeroe)

