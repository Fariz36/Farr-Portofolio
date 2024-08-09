import Navbar from "./Navbar";
import Image from 'next/image'
import Script from 'next/script'


export default function Page() {
  return (
    <html lang="en">
    <body>
      <div>
        <Navbar />
        <div>
          <section id="Home">
            <div className = "bg-bgr-colors-1">
              <div style={{padding: "20px", display: "flex", alignItems: "center", marginTop:"50px"}}>
                <div style={{marginRight:"200px", marginLeft:"50px", fontFamily:"Inter"}}>
                  <h1 style={{ fontSize: "16px", color:"#04043d", lineHeight:"0", marginTop:"40px"}}>
                    Let&apos;s learn something new together!
                  </h1>
                  <h1 style={{ fontSize: "72px", fontWeight:"Bold"}}>
                    <span style = {{color:"#04043d"}}>Hi, I&apos;m </span>
                    <span style = {{color:"#0d98b8"}}>Fariz Rifqi</span>
                  </h1>
                  <div style={{height: "1px", backgroundColor: "#003B46", margin: "5px" }}>
                  </div>
                  <h6 style = {{color:"#333333", fontFamily:"Inter", fontSize:"20px", marginTop:"15px", fontWeight:"500"}}>
                    I’m currently a second-year computer science in <br></br>
                    Bandung Institute of Technology. I have more <br></br>
                    than 4 years of experience in Competitive <br></br>
                    Programming. I am currently in the process of <br></br>
                    learning new concepts in computer science, <br></br>
                    such as machine learning, web development, and <br></br>
                    mobile development <br></br>
                  </h6>

                  <br></br>

                  <div style={{padding: "20px", paddingLeft:"0px", paddingTop:"40px", display: "flex", alignItems: "center"}}>
                <a href="https://www.linkedin.com/in/mochammad-fariz-rifqi-rizqulloh-077081256/">
                  <Image
                    src="/images/linkedin_logo.png"
                    alt="LinkedIn Icon"
                    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    border="0"
                    height={50}
                    width={50}
                    style={{borderRadius:"25px"}}
                    />   
                </a>

                <a href="https://www.instagram.com/ryzz.36/">
                  <Image
                    src="/images/instagram_logo.png"
                    alt="Instagram Icon"
                    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    style={{
                      borderRadius:"25px",
                      marginLeft:"40px"
                    }}
                    border="0"
                    height={50}
                    width={50}
                    />   
                </a>

                <a href="https://www.youtube.com/@farisrifqi36">
                  <Image
                    src="/images/youtube_logo.png"
                    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    alt="Youtube Icon"
                    border="0"
                    height={50}
                    width={50}
                    style={{borderRadius:"10px", marginLeft:"40px"}}
                    />   
                </a>

                <a href="https://codeforces.com/profile/Farr">
                  <Image
                    src="/images/codeforces_logo.png"
                    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    alt="Codeforces Icon"
                    border="0"
                    height={50}
                    width={50}
                    style={{borderRadius:"10px", marginLeft:"40px"}}
                  />   
                </a>

                <a href="/">
                    <h1 className='transition-transform duration-300 hover:scale-110 hover:shadow-lg p-1' style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d", marginLeft:"40px"}}> MY RESUME </h1>
                </a>
                
              </div>

                </div>
                <Image
                  src="/images/FotoFarizEditedEnchanted.png"
                  alt="Photo of Fariz" 
                  border="0"
                  height={500}
                  width={500}
                />
                <br></br>
              </div>
              
              <div style={{height: "1px", backgroundColor: "#003B46", marginLeft:"100px", marginRight:"100px", marginTop:"20px", display: "flex"}}> </div>
            </div>
          </section>
          
          <section id="About">
            <div className = "bg-bgr-colors-2">
              <div className="text-center">
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d", padding:"30px", lineHeight:"0", paddingTop:"50px"}}>
                    Who Am I?
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"500", fontSize:"16px", color:"#333333", marginBottom:"20px"}}>
                    Once again, I’m Mochammad Fariz Rifqi Rizqulloh, nice to meet you :D
                  </h2>

                  <div style={{height: "1px", backgroundColor: "#07575B", marginLeft:"300px", marginRight:"300px", marginBottom:"0px", display: "flex"}}> </div>
              </div>

              <div className="grid grid-cols-2" style={{padding:"50px"}}>
                <div className="border-r-2 border-black">
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d"}}>
                    Competitive Programming Tutor
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"400", fontSize:"16px", color:"#333333", marginRight:"50px"}}>
                    In my free time, I often teach many students from all over Indonesia, both in class and one-on-one (private lessons), preparing them for the City, Provincial, and National levels of the National Science Olympiad
                    
                    <br></br>
                    <br></br>

                    Many company already had called me to became tutor in their class, such as Kokocoder, Afaslearn, ALC Education, KOJA Competition, OBER, Scuola, etc.
                  </h2>

                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d", marginTop : "50px"}}>
                    Staff of Academics of STEI-K ITB 2023
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"400", fontSize:"16px", color:"#333333", marginRight:"50px"}}>
                    In charge of managing a team of 6 staff members tasked for providing peer tutoring and supplementary study materials, organizing and maintaining a repository of past exams, authoring exam solution manuals for 300+ students
                  </h2>

                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d", marginTop : "50px"}}>
                    Vice Leader of Olympiad - IMPACT 4.0 STEI-K ITB 2023
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"400", fontSize:"16px", color:"#333333", marginRight:"50px"}}>
                    In charge of managing a team of 19 staff members tasked for problemsetting, test-case generation, and contest management for 300+ participants
                  </h2>

                </div>
                <div style={{paddingLeft:"50px"}}>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"20px", color:"#0d98b8", lineHeight:"1"}}>
                    2017 - 2020
                  </h2>
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d"}}>
                    SMPN 2 Jombang
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"400", fontSize:"16px", color:"#333333", marginRight:"30px"}}>
                    I spent most of my times preparing myself for National Olympiad in Matematics (OSN), and i became OSN 2018 and OSN 2019 Finalist. Alas, i didn’t get any medal. However, i won more than 20 Mathematics Competition in process
                  </h2>

                  <h2 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"20px", color:"#0d98b8", lineHeight:"1", marginTop:"50px"}}>
                    2020 - 2023
                  </h2>
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d"}}>
                    SMA Semesta BBS Semarang
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"400", fontSize:"16px", color:"#333333", marginRight:"30px"}}>
                    I got a scholarship that almost fully funded my tuition fee. From here, i spent most of my times preparing myself for National Olympiad in Informatics (KSN), and i became KSN 2021 Bronze Medalist.  
                  </h2>

                  <h2 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"20px", color:"#0d98b8", lineHeight:"1", marginTop:"50px"}}>
                    2023 - NOW
                  </h2>
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d"}}>
                    Bandung Institute of Technology
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"400", fontSize:"16px", color:"#333333", marginRight:"30px"}}>
                    I got a scholarship from Beasiswa Unggulan provided by Ministry of Education and Culture, Language and Technology. I still actively compete in Competitive Programming, and teach a lot of students for OSN preparations.  
                  </h2>
                </div>
              </div>
              
              <div style={{height: "1px", backgroundColor: "#07575B", marginLeft:"100px", marginRight:"100px", marginBottom:"0px", display: "flex"}}> </div>
            </div>
          </section>

          <section id="Skill">
            <div className = "bg-bgr-colors-3">
              <div className="text-center">
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d", padding:"30px", paddingTop:"50px", lineHeight:"0"}}>
                    Skills
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"500", fontSize:"16px", color:"#333333", marginBottom:"20px"}}>
                    What am i capable of?
                  </h2>

                  <div style={{height: "1px", backgroundColor: "#07575B", marginLeft:"300px", marginRight:"300px", marginBottom:"0px", display: "flex"}}> </div>
              </div>

              <h2 className="text-center" style = {{color:"#333333", margin:"30px"}}> This Section Is Still Under Development, Stay Tune! </h2>

              <div style={{height: "1px", backgroundColor: "#07575B", marginLeft:"100px", marginRight:"100px", marginBottom:"0px", display: "flex"}}> </div>
            </div>
          </section>

          <section id="Achievement">
            <div className = "bg-bgr-colors-4">
              <div className="text-center">
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d", padding:"30px", paddingTop:"50px", lineHeight:"0"}}>
                    My Achievement
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"500", fontSize:"16px", color:"#333333", marginBottom:"20px"}}>
                    These are some of my achievement that i got in in 4 years of my Informatics Competition journey
                  </h2>

                  <div style={{height: "1px", backgroundColor: "#07575B", marginLeft:"300px", marginRight:"300px", marginBottom:"0px", display: "flex"}}> </div>
              </div>

              <div className="carousel">
                <div className = "navigation">
                  <span className = "prev-btn">
                    <Image
                      src="/images/chevron-left-regular-60.png"
                      alt="prev-btn"
                      width={60}
                      height={60}
                    />
                  </span>

                  <span className="next-btn"> 
                    <Image
                      src="/images/chevron-right-regular-60.png"
                      alt="next-btn"
                      width={60}
                      height={60}
                    />
                  </span>
                </div>

                <div className="img-box">
                  <div className="img-list">
                    <div className="img-slider">
                      <div className="square-bg">
                        <Image 
                          src="/images/square_bg-removebg.png"
                          width={666}
                          height={375}
                        />
                      </div>

                      <div className="img-item">
                        <Image src="/images/slide1.png" width={666} height={375}/>
                      </div>
                      <div className="img-item">
                        <Image src="/images/slide2.png" width={666} height={375}/>
                      </div>
                      <div className="img-item">
                        <Image src="/images/slide3.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide4.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide5.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide6.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide7.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide8.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide9.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide10.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide11.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide12.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide13.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide14.png" width={666} height={375}/>
                      </div> 
                      <div className="img-item">
                        <Image src="/images/slide15.png" width={666} height={375}/>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>

              <div style={{height: "1px", backgroundColor: "#07575B", marginLeft:"100px", marginRight:"100px", marginBottom:"0px", display: "flex"}}> </div>
            </div>
          </section>

          <section id="Project">
            <div className = "bg-bgr-colors-5">
              <div className="text-center">
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d", padding:"30px", lineHeight:"0"}}>
                    My Project
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"500", fontSize:"16px", color:"#333333", marginBottom:"20px"}}>
                    These are showcases of what I&apos;ve created so far
                  </h2>

                  <div style={{height: "1px", backgroundColor: "#07575B", marginLeft:"300px", marginRight:"300px", marginBottom:"0px", display: "flex"}}> </div>
              </div>

              <h1 className="text-center" style = {{color:"#333333", margin:"30px"}}> This Section Is Still Under Development, Stay Tune! </h1>

              <div style={{height: "1px", backgroundColor: "#07575B", marginLeft:"100px", marginRight:"100px", marginBottom:"0px", display: "flex"}}> </div>
            </div>
          </section>
            
          <section id="Contact">
            <div className = "bg-white shadow-lg">
              <div className="text-center">
                  <h1 style = {{fontFamily:"Inter", fontWeight:"700", fontSize:"24px", color:"#04043d", padding:"30px", paddingTop:"30px", paddingBottom:"0px"}}>
                    My Social Media
                  </h1>
                  <h2 style = {{fontFamily:"Inter", fontWeight:"500", fontSize:"16px", color:"#04043d", marginBottom:"20px"}}>
                    Get In Touch With Me!
                  </h2>
              </div>

              <div className="flex items-center justify-center" style={{padding: "20px", display: "flex", alignItems: "center"}}>
                <a href="https://www.linkedin.com/in/mochammad-fariz-rifqi-rizqulloh-077081256/">
                  <Image
                    src="/images/linkedin_logo.png"
                    alt="LinkedIn Icon"
                    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    border="0"
                    height={40}
                    width={40}
                    style={{borderRadius:"25px"}}
                  />   
                </a>

                <a href="https://www.instagram.com/ryzz.36/">
                  <Image
                    src="/images/instagram_logo.png"
                    alt="Instagram Icon"
                    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    style={{
                      borderRadius:"25px",
                      marginLeft:"40px"
                    }}
                    border="0"
                    height={40}
                    width={40}
                  />   
                </a>

                <a href="https://www.youtube.com/@farisrifqi36">
                  <Image
                    src="/images/youtube_logo.png"
                    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    alt="Youtube Icon"
                    border="0"
                    height={40}
                    width={40}
                    style={{borderRadius:"10px", marginLeft:"40px"}}
                  />
                </a>

                <a href="https://codeforces.com/profile/Farr">
                  <Image
                    src="/images/codeforces_logo.png"
                    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    alt="Codeforces Icon"
                    border="0"
                    height={40}
                    width={40}
                    style={{borderRadius:"10px", marginLeft:"40px"}}
                  />   
                </a>
                
              </div>

              <pre className="text-center" style={{color:"#1E1E1E", paddingTop:"20px", fontFamily:"Inter", fontWeight:"Bold", fontSize:"16px"}}> F a r i z      R i f q i </pre>

              <div className="flex items-center justify-center">
                <Image
                  src="/images/ikuyo-kita.png"
                  alt="ayank"
                  className="transition-transform duration-300 hover:scale-150"
                  border="0"
                  style={{margin:"20px"}}
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <script src="/script.js"></script>
    </body>
    </html>
  )
}
