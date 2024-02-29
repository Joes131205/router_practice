function Contact() {
    return (
        <div className="text-center flex flex-col gap-10">
            <h1 className="text-2xl font-bold">Contact Us!</h1>
            <form action="" className="flex flex-col items-center gap-10">
                <div className="flex flex-col">
                    <label>Name:</label>
                    <input type="text" />
                </div>
                <div className="flex flex-col">
                    <label>Email:</label>
                    <input type="text" />
                </div>
                <div className="flex flex-col">
                    <label>Message:</label>
                    <textarea></textarea>
                </div>

                <button className="bg-tiffany_blue-400 text-black px-10 py-2 rounded-xl">
                    Submit
                </button>
            </form>
            <h1>Or you can reach out to me on my social media!</h1>
            <p>Twitter: @yourname</p>
            <p>Instagram: @yourname</p>
            <p>LinkedIn: Your Name</p>
            <p>GitHub: yourname</p>
        </div>
    );
}

export default Contact;
