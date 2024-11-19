 type CardProps = {
    title : string,
    description : string,
    img : string, 
 }

function Card({title, description, img} : CardProps) {
  return (
    <div className={` ${
        title === 'Supervisor' ? 'border-t-cyan' :
        title === 'Team Builder' ? 'border-t-red' :
        title === 'Karma' ? 'border-t-orange' :
        title === 'Calculator' ? 'border-t-blue' :
        ''
    } bg-white p-6 rounded-md shadow-md border-t-4  flex flex-col  lg:basis-1/3`}>
        <h3 className="text-xl font-bold text-darkBlue mb-2">{title}</h3>
        <p className="text-sm text-gray mb-12">{description}</p>
        <div className="self-end">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Card