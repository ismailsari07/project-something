import aboutimage from "../about-build.png"
export default function About() {
    return (
        <div className="w-[100%] flex h-fit  justify-between items-center"> 
            <div className="text-about w-[50%]">
                <h2 className="font-bold text-7xl mb-7">Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing.</h2>
                <div className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur illo sunt, qui a aliquid iste soluta exercitationem ipsa ab facere officiis veritatis inventore laudantium similique dolore laboriosam error distinctio. Velit reprehenderit, delectus alias soluta harum provident nulla, laudantium, nisi expedita vero placeat at ullam minus sunt. Nemo maiores id blanditiis, placeat ab in ratione iusto quo nostrum minima, vitae fuga. Laboriosam pariatur quam facilis autem odit ut quia culpa temporibus hic voluptate quasi enim tempora expedita vel id, rerum asperiores. Inventore alias veniam animi culpa magni pariatur accusamus reiciendis repellat hic, voluptate qui ullam? Odit, vero necessitatibus. Deserunt, cum vero.</div>
            </div>
            <div className="image-about w-[40%]">
                <img src={aboutimage} alt="1" />
            </div>
        </div>
    )
}