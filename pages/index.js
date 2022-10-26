import Head from 'next/head'
import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiKaggle } from 'react-icons/si'

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-fit min-w-fit">
      <Head>
        <title>Janin Manalili</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900 px-10">
        <section className="h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-white"> janinnm </h1>
            <ul className="flex items-center">
              <Link href="/"><li className="text-white cursor-pointer text-1xl px-5"> Home </li></Link>
              <Link href="/projects"><li className="text-white cursor-pointer text-1xl px-5"> Projects </li></Link>
              <a href="#skills"><li className="text-white cursor-pointer text-1xl px-5"> Skills </li></a>
              <li><a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 flex" href="mailto:jvmanalili1@up.edu.ph"> Contact Me</a></li>
            </ul>
          </nav>  
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Janin Manalili</h2>
            <h3 className="text-2xl text-white py-2"> 안녕하세요. 제 이름은  <span className="text-teal-500">재닌</span> 입니다 </h3>
            <p className="text-md py-5 leading-8 text-white"> 
            I am a BS Computer Science Student at  <span className="text-teal-500">University of the Philippines Diliman</span>.
           My interests include  <span className="text-teal-500">Machine Learning, Data Science,</span> and <span className="text-teal-500">Computer Security. </span>  
            I have worked with different frameworks, but I would consider myself adept in languages such as  <span className="text-teal-500">Python, C,</span> and <span className="text-teal-500"> Javascript.</span>
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <a href="https://www.linkedin.com/in/janinmanalili/"><AiFillLinkedin/></a> 
            <a href="https://github.com/janinnm"><AiFillGithub/></a> 
            <a href="https://www.kaggle.com/janinmanalili"><SiKaggle/></a>  
          </div>
        </section>

        <section id="skills">
          <h3 className="text-white text-3xl py-10">Skills</h3>
          <div className="text-white text-left p-20 flex flex-wrap justify-around">
            <div class="mb-10 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
              </a>
              <div class="p-5 flex flex-wrap justify-around">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Software Engineering</h5>
                  </a>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">MongoDB</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Express</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Reactjs</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Redux</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Nodejs</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Nextjs</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Tailwind</span>
              </div>
            </div>

            <div class="mb-10 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data Science & Machine Learning</h5>
                  </a>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Python</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">PowerBI</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">MATLAB</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">MySQL</span>
                  
              </div>
            </div>

            <div class="mb-10 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Computer Networks & Security</h5>
                  </a>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">C</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Python</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Wireshark</span>
              </div>
            </div>

            <div class="mb-10 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Others</h5>
                  </a>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">CUDA</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Linux</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2.5 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Git</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white flex justify-center items-center fixed bottom-0 left-0 bg-slate-800 w-screen h-10">
          <h2>© Copyright 2022 Janin Manalili.</h2>
      </footer>

    </div>
  )
}