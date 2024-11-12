import SecSmall from "./SecSmall"


export default function SmallFile({data}) {

   
    
  return (
    <div>
      name : - {data.name}
      <br/>
      age : - {data.age}
      <br/>
      location : - {data.location}
      <br/>
      <img src={data.img} width={300} />

      <SecSmall secData={data} />
    </div>
  )
}
