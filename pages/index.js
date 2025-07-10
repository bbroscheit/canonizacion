import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Imagen1 from '../pages/images/imagen1.jpg'
// import Imagen2 from '../pages/images/imagen2.jpg'
// import Imagen3 from '../pages/images/imagen3.jpg'


export default function Home() {
  return (
    <>
      <Head>
        <title>Biografía del Padre Ashkar</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Biografía del Padre Francisco Julián Ashkar</h1>
        <div className={styles.articleContainer}>
        <article className={styles.article}>
          <p>
            Francisco Julián Ashkar nace el año de 1880 en Beit-Shabeb, a los quince años ingresó a la Orden Alepina Maronita (actualmente conocida como  Orden Maronita Marianita). Ahí tomará el nombre religioso de “Manuel” concluyó sus estudios en el colegio de la orden y viendo su capacidad, fue destinado a Roma para proseguir su preparación  en la sede de Propaganda Fide.  En Roma se graduará como doctor en  Filosofía, Terminados sus estudios en Italia volvió en 1912 al Líbano, donde fue nombrado director y profesor del colegio de la orden.
          </p>
          <p>
            {/* <Image src={Imagen1} alt="Padre Ashkar" width={500} height={300} className={styles.image} /> */}
            <img src={"https://res.cloudinary.com/dyvayayab/image/upload/v1752171653/imagen1_cfbuty.jpg"} alt="Padre Ashkar" width={500} height={300} className={styles.image} />
            El 25 de junio de 1919 el P. General Gabriel Al-Chemali designa a dos sacerdotes Manuel Ashkar y Simón Fahed como misioneros en Sudamérica. Antes de partir  a América, van a Roma y allí son  nombrados por S. E. R. Cardenal Federico Tioschini como: “Misioneros Apostólicos Católicos para los fieles de rito Maronita extensivo a los files de rito Latino”. 
          </p>  
          <p>
            El 8 de julio de 1920 llegan a la Argentina, donde se quedan por dos meses en la ciudad de Gualeguay, prov. de Entre Ríos, en la casa de los hermanos del P. Ashkar. 
          </p>
          <p>
            Luego viajan a Buenos Aires en donde se reúnen con el nuncio apostólico y  con el arzobispo de Buenos Aires, a quienes les presentan las cartas de la orden y de la Santa Sede, y se retiran con la bendición de ambas autoridades eclesiásticas encomendando a celebrar los santos sacramentos según el rito católico maronita a los fieles de la colectividad sin excluir a los de rito Latino si así lo solicitaran  y listos para empezar su misión.
          </p>
          <p>  
            Recordemos que los maronitas perteneces a una Iglesia oriental católica que sigue la tradición litúrgica antioquena  o siria occidental en la que utiliza como lenguaje litúrgico el siríaco occidental y como lengua auxiliar el árabe libanés. Está organizada como Iglesia patriarcal de acuerdo a la forma prescripta por los cánones de las Iglesias orientales y está  bajo la supervisión de la congregación para las Iglesias orientales. Está presidida por el patriarca de Antioquía de los maronitas, cuya sede se encuentra en Bkerké, en el distrito de Keserwan de la gobernación del Monte Líbano en el Líbano.
          </p>
          <p>  
            Así  los dos misioneros maronitas recorrieron el país  visitando a sus paisanos y predicando. Finalizado este período el P. Fahed regresa al Líbano, en cambio el P. Ashkar permaneció en el país bajo el pedido insistente de la gente de la colectividad. Fue así que durante once años (1920-1931) se dedicó a viajar por todo el territorio argentino, uruguayo, y gran parte de Chile y Paraguay frecuentando a los fieles maronitas, celebrando con mucho fervor y labor incansable los sacramentos del bautismo, confesión, misas, matrimonios y unción de los enfermos, según el rito antioqueno católico maronita y latino si fuese necesario.
          </p>
          <p>  
            {/* <Image src={Imagen2} alt="Padre Ashkar" width={500} height={300} className={styles.imageRight} /> */}
            <img src={"https://res.cloudinary.com/dyvayayab/image/upload/v1752171654/imagen2_qgb9in.jpg"} alt="Padre Ashkar" width={500} height={300} className={styles.imageRight} />
            Al fin de los años ’20 el P. Ashkar se instaló en la ciudad de San Martín, provincia de Bs. As., donde frecuentaba la parroquia de Jesús Amoroso (actualmente la catedral del Buen Pastor) para celebrar la misa el domingo en rito antioqueno católico (Maronita) para la colectividad libanesa en esta ciudad.  El 26 de septiembre de 1931, el P. General Gabriel Al-Chemali de la orden encarga al P. Ashkar fundar una Misión Maronita Marianita en Argentina y al mismo tiempo lo nombra representante de la misma ante las autoridades eclesiástica locales, por aquel entonces era el Arzobispado de La Plata.
          </p>
          <p>  
            Para realizar su proyecto, el P. Ashkar posó su mirada sobre el barrio de Villa Lynch, por su ubicación cerca de la Capital y de San Martín donde vivían muchas familias libanesas. La zona era de quintas dispersas. Será la Iglesia de Ntra. Sra. del Líbano el hito, podríamos decir; fundacional de la nueva región. 
          </p>
          <p>
            Fue difícil obtener la autorización adecuada para levantar la iglesia. Durante la primera década el P. Ashkar debió sufrir las dificultades que traían los trámites de la autorización debido al tiempo que demoraban las respuestas de la Orden M. M. y el Arzobispado de la Plata, a causa de las largas distancias y los distintos idiomas y culturas entre Villa Lynch, Líbano, Roma y el Arzobispado de la Plata. 
          </p>
          <p>  
            Finalmente compra un terreno ubicado entre Guido Spano (actualmente Republica del Líbano) y Monteagudo (actualmente Padre Manuel Ashkar) de tres lotes y una superficie de más de 1600 m², el que inscribe  a su nombre de estado civil según su documento argentino: Francisco Julián Rubio. Allí levantará el templo. Mientras espera las aprobaciones para la construcción,  vivirá en la casa de un  bienhechor católico italiano  Carlos Livi. Este mismo pone a disponibilidad del padre dos habitaciones una para dormir y otra para las ceremonias religiosas y las actividades pastorales. 
          </p>
          <p>  
            {/* <Image src={Imagen3} alt="Padre Ashkar" width={500} height={300} className={styles.image} /> */}
            <img src={"https://res.cloudinary.com/dyvayayab/image/upload/v1752171653/imagen3_bkfxe4.jpg"} alt="Padre Ashkar" width={500} height={300} className={styles.image} />
            El 26 de octubre de 1931 el Arzobispo de La Plata Francisco Alberti aprueba la fundación de la misión autorizando al P. Ashkar a levantar una iglesia. Al fallecimiento de Mons. Alberti, le sucede en la Sede Episcopal de La Plata Mons. Juan Pascual Chimento, el cual se mostrará por demás reacio a la construcción de cualquier templo católico que no sea de rito latino en su diócesis.  Las obras quedan interrumpidas y las disputas con la sede Platense crecen. No obstante las obras continuarán, y la persecución sobre el Padre Ashkar por parte de las autoridades eclesiásticas platenses culminara cuando se crea el Obispado de Morón en 1957 y la Iglesia quedará bajo la tutela del nuevo Obispo Mons. Miguel Raspanti, el cual visitará en varias oportunidades la comunidad y entablará grandes lazos de amistad con el P. Ashkar. Es de notar que en la primera misa que celebrará en Obispo de Morón en la Iglesia de Ntra. Sra. del Líbano, pedirá perdón públicamente por la injusta persecución realizada al padre Ashkar. 
          </p>
          <p>  
            La salud del Padre comenzará a declinar el 7 de agosto del 1958, día de San Cayetano día que ya no pudo celebrar la misa pautada para ese día, deberá ser internado en el hospital Sirio-Libanes hasta el  21 de septiembre. Presintiendo  su fin solicita volver a su parroquia y  permanece postrado en cama hasta el día de su fallecimiento, el cual será el 6 de octubre de 1958, tenía 78 años.
          </p>
          <p>  
            Su funeral es multitudinario, el mayor que se recuerde en la ciudad de San Martin y el velatorio se debe extender por 4 días. Sus restos descansan en el camarín de la Iglesia Parroquial de Ntra. Sra. del Líbano y muchos fieles han solicitado el inicio de su proceso de canonización, debido a sus virtudes vividas en grado heroico y a su fama de santidad. 
          </p>
        </article>
        </div>
      </main>
    </>
  )
}

