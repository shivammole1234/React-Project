import style from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className= {`${style.navigation} container`} >
<div className="logo">
    <img src="/images/logo.png" alt="contact us logo" />
</div>

<ul>
    <li href="#">HOME</li>
    <li href="#">ABOUT</li>
    <li href="#">CONTACT</li>

</ul>

    </nav>
  )
}

export default Navigation