import { Request, Response } from "express"

const tutors = [
  {
    id: 1,
    name: "Jonas",
    phone: "85989323895",
    email: "jonas@paidepet.com",
    date_of_birth: "1993-12-12 10:10",
    zip_code: "61760000",
    pets: [
      {
        id: 1,
        name: "Lilo",
        species: "dog",
        carry: "p",
        weight: 5,
        date_of_birth: "1993-12-12 10:10"
      }
    ]
  },{
    id: 2,
    name: "Antonio",
    phone:"40028922",
    email: "evandro@obrabo.com",
    date_of_birth:"0001-01-01 00:00",
    zip_code: "100000000",
    pets: [
      {
        id: 1,
        name: "Happy",
        species: "cat",
        carry: "p",
        weight: 1,
        date_of_birth: "2019-08-01 12:00"
      }
    ]
  },{
    id: 3,
    name: "Zé",
    phone: "95389625895",
    email: "ze@reidelas.com",
    date_of_birth: "1999-12-12 12:12",
    zip_code: "63060000",
    pets: [
      {
        id: 1,
        name: "januario",
        species: "cat",
        carry: "p",
        weight: 2,
        date_of_birth: "2013-01-12 15:00"
      }
    ]
  }
]

/*--------------------funções--------------------------------*/
// todos tutores
export function Tutors(req: Request, res: Response){
  return res.status(200).send(tutors);
}

// Criar tutor
export async function CreateTutor(req: Request, res: Response) {
  //console.log(req.body);
  
  const Tt: any = req.body;
  tutors.push(Tt);

  return res.status(200).send("Tutor has been added!");
}

// Obter tutor especifico
export function TutorById(req: Request, res: Response){
  //console.log(req.params);
  
  const id: number = +req.params.id;

  for(let i = 0; i < tutors.length; i++){
    if(tutors[i].id == id){
      return res.status(200).json(tutors[i]);
    };
  }
  return res.status(404).send("Tutor not found!");
}

// Atualizar tutor
export function UpdateTutor(req: Request, res: Response){
  //console.log(req.params);
  
  const id: number = +req.params.id;

  const tt: any = req.body;
  if(tt.id == id){
    for(let i = 0; i < tutors.length; i++){
      if(tutors[i].id == id){
        const name: string = tutors[i].name;

        tutors[i] = tt;
        return res.status(200).send(`Tutor ${name}, has updated to ${tutors[i].name}.`);
      };
    };
    return res.status(404).send("Tutor not found!");
  };
  return res.status(400).send(`Request ID and provided parameters do not match`);
}

// Deletar tutor
export function DelTutor(req: Request, res: Response){
  //console.log(req.params);

  const id: number = +req.params.id;

  for(let i = 0; i < tutors.length; i++){
    if(tutors[i].id == id){
      const name: string = tutors[i].name;

      tutors.splice(i, 1);
      return res.status(200).send(`Tutor: ${name}, has been deleted!`);
    };
  };
  return res.status(404).send("Tutor not found!");
}

// Cria animal add em tutor
export function CreatePet(req: Request, res: Response){
  //console.log(req.params);

  const pet: any = req.body
  const id: number = +req.params.tutorId;

  for(let i = 0; i < tutors.length; i++){
    if(tutors[i].id == id){
      tutors[i].pets.push(pet);
      return res.status(200).send(`Pet: ${pet.name}, added in tutor: ${id}, ${tutors[i].name}.`)
    };
  };
  return res.status(404).send(`Tutor: ${id}, for the pet: ${pet.name}, isn't found!`);
}

// Att inf animal
export function UpdatePet(req: Request, res: Response){
  //console.log(req.params);

  const id: number = +req.params.petId;
  const tt: number = +req.params.tutorId;

  const pet = req.body;
  if(pet.id == id){
    for( let i = 0; i < tutors.length; i++ ){
      if( tutors[i].id == tt ){
        for( let j = 0; j < tutors[i].pets.length; j++ ){
          if( tutors[i].pets[j].id == id){
            tutors[i].pets[j] = pet;
            return res.status(200).send(`Pet: ${pet.name}, updated in tutor: ${tt}, ${tutors[i].name}.`);
          };
        };
      };
    }
    return res.status(404).send(`Tutor id: ${tt}, or the pet: ${pet.name}, isn't found!`);
  }
  return res.status(400).send(`Request ID and provided parameters do not match`);
}

// Del animal
export function DeletePet(req:Request, res: Response){
  //console.log(req.params);

  const id: number = +req.params.petId;
  const tt: number = +req.params.tutorId;
  
  for( let i = 0; i < tutors.length; i++ ){
    if( tutors[i].id == tt ){
      for( let j = 0; j < tutors[i].pets.length; j++ ){
        if( tutors[i].pets[j].id == id ){
          const name: string = tutors[i].pets[j].name;

          tutors[i].pets.splice(j, 1);
          return res.status(200).send(`Pet: ${name}, deleted in tutor: ${tt}, ${tutors[i].name}.`);
        };
      };
    };
  };
  return res.status(404).send(`Tutor id: ${tt}, or the pet id: ${id}, isn't found!`);
}