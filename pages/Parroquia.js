import React from 'react'
import styles from '../styles/Parroquia.module.css'
import Image from 'next/image'
import Iglesia1 from '../pages/images/iglesia1.jpg'
import Iglesia2 from '../pages/images/iglesia2.jpg'
import Iglesia3 from '../pages/images/iglesia3.jpg'


export default function Parroquia() {
  return (
    <>
      <div className={styles.parroquiaContainer}>
        
        <div className={styles.videoWrapper}>
          
          <iframe
            src="https://www.youtube.com/embed/1MqXjl91yT0?modestbranding=1&rel=0&autoplay=1"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 50,
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Parroquia"
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.title}>HISTORIA DE LA PARROQUIA SANTÍSIMO CALAVARIO Y NUESTRA SEÑORA DEL LÍBANO.</p>
          <p>Es una historia escrita con sangre, sudor, lágrimas y muchos sacrificios de más de diez sacerdotes de la Orden Maronita Marianita e innumerables fieles.</p>
          <p>El 25 de junio de 1919 el P. General Gabriel Al-Chemali designa a dos sacerdotes Manuel Ashkar y Simón Fahed como misioneros en Sudamérica.</p>
          <p>El 8 de julio de 1920 llegan a la Argentina como Misioneros Apostólicos Católicos Romanos nombrados por S. E. R. Cardenal Federico Tioschini de la Santa Sede, donde se quedan por dos meses en la ciudad de Gualeguay, prov. de Entre Ríos, en la casa de los hermanos del P. Ashkar.</p>
          <p>Luego viajan a Buenos Aires en donde se reúnen con el Nuncio Apostólico y con el Arzobispo de Buenos Aires, a quienes les presentan las cartas de la Orden y de la Santa Sede, y se retiran con la bendición de ambas autoridades eclesiásticas encomendando a celebrar los Santos Sacramentos según el rito Católico Maronita a los fieles de la colectividad y listos para empezar su misión.</p>
          <p>
            {/* <Image src={Iglesia1} alt="Iglesia del Líbano" width={500} height={300} className={styles.image} /> */}
            <img src={"https://res.cloudinary.com/dyvayayab/image/upload/v1752171652/iglesia1_pafmcn.jpg"} alt="Iglesia del Líbano" width={500} height={300} className={styles.image} />
            Así que los dos misioneros maronitas recorrieron el país recolectando fondos monetarios de la colectividad libanesa durante dos años. Finalizado este período el P. Fahed regresa al Líbano con el monto recaudado a fin de ayudar a los afectados por la primera guerra mundial. En cambio el P. Ashkar permaneció en el país bajo el pedido insistente de la gente de la colectividad. Fue así que durante once años (1920-1931) se dedicó a viajar por todo el territorio argentino, uruguayo, y gran parte de Chile y Paraguay frecuentando a los fieles maronitas, celebrando con mucho fervor y labor incansable los Sacramentos del Bautismo, Confesión, Santa Misa, Matrimonios y Unción de los enfermos, según el rito Antioqueno Católico Maronita.</p>
          <p>Al fin de los años ’20 el P. Ashkar se instaló en la ciudad de San Martín, provincia de Bs. As., donde frecuentaba la parroquia de Jesús Amoroso (actualmente la Catedral) para celebrar la misa el domingo en Rito Antioqueno Católico Maronita por la colectividad libanesa en esta ciudad. Domingo tras domingo el número de los fieles se aumentaba notablemente en su misa, igualmente crecía el deseo del padre y la necesidad de los feligreses maronitas para edificar su propia iglesia.</p>
          <p>El 26 de septiembre de 1931, el P. General Gabriel Al-Chemali de la O.M.M. encarga al P. Ashkar fundar una Misión Maronita Marianita en Argentina y al mismo tiempo lo nombra representante de la misma ante las autoridades eclesiástica locales que era el Arzobispado de La Plata.</p>
            
          <p>
            {/* <Image src={Iglesia2} alt="Iglesia del Líbano" width={500} height={300} className={styles.imageRight} /> */}
            <img src={"https://res.cloudinary.com/dyvayayab/image/upload/v1752171653/iglesia2_jodfer.jpg"} alt="Iglesia del Líbano" width={500} height={300} className={styles.imageRight} />
            Para realizar su proyecto, el P. Ashkar posó su mirada sobre el barrio de Villa Lynch, por su ubicación cerca de la Capital y de San Martín donde vivían muchas familias libanesas. En aquel entonces Villa Lynch era un barrio humilde con calles de ripio y muy pocas edificaciones. Por eso el precio de los terrenos era barato y accesible para la gente pobre. Además la política del Gobierno era a favor de la población de este barrio y así ofrecía con cada terreno diez mil ladrillos para que el comprador pueda edificar directamente su casa. Pronto Villa Lynch prosperó gracias a la estación del ferrocarril, el tranvía y la avenida General Paz que se realizó en 1940...todas estas rutas conectaban Lynch con la Capital Federal y la ciudad de San Martín y le convertía en un barrio estratégico y progresivo.</p>
          <p>Fue difícil obtener la autorización adecuada para levantar la iglesia. Durante la primera década el P. Ashkar debió sufrir las dificultades que traían las trámites de la autorización debido al tiempo que demoraban las respuestas de la Orden M. M. y el Arzobispado de la Plata, a causa de las largas distancias y los distintos idiomas y culturas entre Villa Lynch, Líbano, Roma y el Arzobispado de la Plata.</p>
          <p>Finalmente compra un terreno ubicado entre Guido Spano (actualmente Republica del Líbano) y Monteagudo (actualmente Padre Manuel Ashkar) de tres lotes y una superficie de más de 1600 m², el que inscribe a su nombre de estado civil según su documento argentino: Francisco Julián Rubio. Allí levanta el templo y el presbiterio aproximadamente en un lapso de veinte años. Pronto el P. Ashkar se muda a Lynch a vivir en la casa del bienhechor católico italiano el Señor Carlos Livi. Este mismo pone a disponibilidad del padre dos habitaciones una para dormir y otra para las ceremonias religiosas y las actividades pastorales.</p>
          <p>El 26 de octubre de 1931 el Arzobispo de La Plata Francisco Alberti aprueba la fundación de la misión autorizando al P. Ashkar a levantar una iglesia.</p>
        </div>

      </div>
    </>
  )
}