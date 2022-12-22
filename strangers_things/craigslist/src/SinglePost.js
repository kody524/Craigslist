import styles from './Posts'

function SinglePost({title,price,deliver,location,key,setSingle}){
return(
    <section key={key} className={styles.body}>
                <div className={styles.container}>
                  <h1 className={styles.title}>{title}</h1>
                  <h3 className={styles.price}>Price: {price}</h3>
                  <h6 className={styles.deliver}>
                    Will Deliver:{deliver}
                  </h6>
                  <h6 className={styles.location}>Location:{location}</h6>
                  <button onClick={()=>{
                    setSingle(false)
                  }}>back</button>
                
                </div>
              </section>
)
}

export default SinglePost;