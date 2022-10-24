import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main className={styles.main}>
       

      <div className={styles.gridSearch}>
              <a  className={styles.block}> 
                <section> <img src="/icesi.JPG" width="200" /> </section>                            
              </a>      

              <a className={styles.block}>        
                <searchbar>
                  <input type="text" id="search" placeholder="Search People" autoComplete="off"  size="100"/> 
                </searchbar>
              </a>

              <a  className={styles.block}>
              <profile> <img src="perfil.png" width="75" /> </profile>
              </a>
      </div>     
  

      <div id="container">

       <div className={styles.diva1}>
          <gear>
            <img id= "img1" src="/gearIcon.png" width="70" height="70"/>
          </gear>
      
          <a className={styles.btplacer2}>
            <h1>
              <label> Notificaciones </label>
              <div id="invitacion1" className={styles.btplacer}>
              <ul>
                <li>
                    <Link href="/monitoria">
                    <a className={styles.invitationTitle} title="Ver mas informacion"> Invitación a grupo #1 </a> 
                  </Link>
                    <input id="bt1" type="button" value="Aceptar" />
                    <input  id="bt2" type="button" value="Rechazar"/>
                </li>
                </ul>  
              
              
              </div>
            </h1>
          </a> 
        </div>

        <div className={styles.title}>
            Mi calendario
          </div>

        <a>
        <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FBogota&src=c2FudGlhZ29jYXJkZW5hc21vbnRlc0BnbWFpbC5jb20&src=ZXMuY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043" ></iframe>
        </a>
      </div>

      
    </main>
  </div>
  
  )
}
