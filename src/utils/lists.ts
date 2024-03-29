import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io"
import { IoLogoLinkedin } from "react-icons/io5"
import { SiGmail } from "react-icons/si"


export const navlist=[
  {label:'Home', link:'/'},
  {label:'Portfolio', link:'/portfolio'},
  {label:'Members', link:'/members'},
  {label:'Programs', link:'/programs'},
]

export const socialMediaList=[
  {label:'Facebook',icon:IoLogoFacebook,color:"#1877F2",url:"https://facebook.com/neuronite.kuet"},
  {label:'LinkedIn',icon:IoLogoLinkedin,color:"#0077B5",url:"https://www.linkedin.com/company/neuronite"},
  {label:'Email',icon:SiGmail,color:"#EA4335",url:"mailto:neuronite.kuet@gmail.com"},
  {label:'Youtube',icon:IoLogoYoutube,color:"#EA4335",url:"https://www.youtube.com/@NeuroniteKUET"},
]

export const socialurls=[
  {name:'email', url:'mailto:neuronite.kuet@gmail.com'},
  {name:'facebook', url:'https://facebook.com/neuronite.kuet'},
  {name:'linkedin', url:'https://www.linkedin.com/company/neuronite'},
  {name:'youtube', url:'https://www.youtube.com/@NeuroniteKUET'}
]

export const programList=[
  {
    title:'C Programming',
    desciption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates, voluptatem minima vitae doloribus quia quae sit aliquam enim fuga ducimus laborum temporibus consequuntur amet blanditiis nam placeat cupiditate mollitia perferendis. Non fugit qui similique eius corporis provident! Ipsum, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates, voluptatem minima vitae doloribus quia quae sit aliquam enim fuga ducimus laborum temporibus consequuntur amet blanditiis nam placeat cupiditate mollitia perferendis. Non fugit qui similique eius corporis provident! Ipsum, placeat.",
    imgUrl:'/images/c.png'
  },
  {
    title:'Python Programming',
    desciption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates, voluptatem minima vitae doloribus quia quae sit aliquam enim fuga ducimus laborum temporibus consequuntur amet blanditiis nam placeat cupiditate mollitia perferendis. Non fugit qui similique eius corporis provident! Ipsum, placeat.",
    imgUrl:'/images/python.png'
  },
]

export const memberList=[
  {
    name:'Md. Sabbir Rahman Akash',
    designation:"Ex-President",
    imgUrl:'/images/python.png'
  },
  {
    name:'Tarik Anam Tonmoy',
    designation:"President",
    imgUrl:'/images/python.png'
  }
]

export const portFolioList=[
  {
    title:"Tic Tac Toe",
    imgUrl:"/images/portfolio/tictactoe.jpg",
    description:"The console Tic Tac Toe game in C, developed as part of the 'C Programming: Crack the Code v1.0' program for Batch 2k21, provides an interactive gaming experience where two players compete to mark spaces in a 3x3 grid, aiming to form a horizontal, vertical, or diagonal line of their symbol (X or O) before their opponent.",
    status:'Completed'
  },
  {
    title:"LE Notes",
    imgUrl:"/images/portfolio/notes.png",
    description:"'LE Notes' is a dedicated note-sharing application tailored for Leather Engineering students at KUET (Khulna University of Engineering & Technology). This specialized platform enables students to effortlessly share, access, and collaborate on course materials, lecture notes, and academic resources specific to their field of study. With intuitive features designed to streamline the learning process, 'LE Notes' fosters a collaborative academic community, enhancing knowledge sharing and facilitating seamless communication among students and faculty members alike.",
    status:'In Progress'
  },
  {
    title:"Leather Dictionary",
    imgUrl:"/images/portfolio/dictionary.png",
    description:"'Leather Dictionary' is an essential mobile application designed specifically for leather enthusiasts, professionals, and students alike. This comprehensive dictionary serves as a one-stop reference tool, offering a vast repository of terminology, jargon, and industry-specific terms related to the leather industry.",
    status:'Planned'
  },
  {
    title:"Supply Chain Accelerator",
    imgUrl:"/images/portfolio/supplychain.png",
    description:"Unlock the potential of your supply chain with 'Supply Chain Accelerator'. Seamlessly discover supplier contacts, streamline sourcing, and elevate your business operations. Experience enhanced efficiency and unparalleled convenience at your fingertips.",
    status:'Not Started'
  },

]
