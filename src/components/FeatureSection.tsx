import Card from "./Card"
import calculator from '../assets/icon-calculator.svg'
import karma from '../assets/icon-karma.svg'
import team from '../assets/icon-team-builder.svg'
import supervisor from '../assets/icon-supervisor.svg'

 

function FeatureSection() {
  return (
    <section className="flex flex-col gap-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-5 max-w-md mx-auto">
            <h1 className="flex flex-col gap-1 text-darkBlue text-2xl items-center"> Reliable, efficient delivery <span className="font-bold">Powered by Technology</span></h1>
            <p className="text-center   text-base text-gray">  Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <Card title="Supervisor" description="Monitors activity to identify project roadblocks" img={supervisor}/>
            <div className="flex flex-col gap-5 lg:basis-1/3">
                <Card title="Team Builder" description=" Scans our talent network to create the optimal team for your project" img={team}/>
                <Card title="Karma" description=" Regularly evaluates our talent to ensure quality" img={karma}/>
            </div>
            <Card title="Calculator" description=" Uses data from past projects to provide better delivery estimates" img={calculator}/>
        </div>
    </section>
  )
}

export default FeatureSection