import styles from './IsLoading.module.css'
function IsLoading(){
    return(
        <div className={styles.container}>
            <h1 className={styles.load}>Loading...</h1>
        </div>
    )
}
export default IsLoading