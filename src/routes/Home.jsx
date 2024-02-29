function Home(prop) {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Home</h1>
            <p>
                Welcome to My Awesome Website, where you can find everything you
                need to know about me and my projects. Whether you’re looking
                for my portfolio, my blog, or my contact information, you’ve
                come to the right place. I’m a web developer, a graphic
                designer, and a creative thinker who loves to explore new ideas
                and technologies. I’m passionate about creating beautiful,
                functional, and user-friendly websites that make a difference.
            </p>
            <br />
            <p>
                On this website, you can see some of the projects I’ve worked
                on, ranging from personal websites to e-commerce platforms. You
                can also read my blog, where I share my thoughts, insights, and
                tips on web development and design. You can also learn more
                about me, my background, my skills, and my interests. And of
                course, you can contact me anytime if you have any questions,
                feedback, or opportunities.
            </p>
            <br />
            <p>
                I hope you enjoy browsing my website and finding out more about
                me and my work. I’m always happy to connect with new people and
                learn new things. So don’t hesitate to reach out and say hello.
            </p>
            <p>{prop.name}</p>
        </div>
    );
}
export default Home;
