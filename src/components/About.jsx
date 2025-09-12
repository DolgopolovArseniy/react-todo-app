function About() {
  return (
    <main className="text-[#f9eee5] bg-[#171a25] max-w-3xl mx-auto my-30 p-8 rounded-2xl animate-scaling">
      <h2 className="font-bold capitalize text-2xl ">
        About this todo application
      </h2>
      <section className="flex flex-col mt-6 gap-1">
        <h3 className="font-bold capitalize text-xl">
          Hi, I'm Arseniy Dolgopolov 👋
        </h3>
        <p className="text-lg leading-[31px]">
          This is my todo application - a simple yet powerful task management
          tool that helps you stay organized and productive. You can create new
          todos, edit existing ones, mark them as complete when finished, or
          delete them entirely. The app also fetches random todos from an
          external source to give you some tasks or inspiration. Everything is
          designed to be intuitive. The interface provides instant feedback for
          your actions through notifications.
        </p>
      </section>
      <section className="flex flex-col mt-6 gap-1">
        <h3 className="font-bold capitalize text-xl">Tech Stack 🛠️</h3>
        <ul className="list-disc ml-5 text-lg">
          <li>React - Core library with functional components and hooks</li>
          <li>Tailwind CSS - Utility-first styling</li>
          <li>React Router - Client-side navigation and routing</li>
          <li>Context API + useReducer - Global state management</li>
          <li>React Hot Toast - Toast notifications for user feedback</li>
        </ul>
      </section>
    </main>
  );
}

export default About;
