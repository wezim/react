import React from "react";
import Logo from '../assets/OIP.jpeg'
import { Link } from "react-router-dom";
import './style.css'
import Video from '../assets/video.mp4'


function Header() {
    return (
        <>
       
        <header>
                <img id="logo" src={Logo} />
            <nav>
                <ul>

                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/Contato'>
                        <li>Contato</li>
                    </Link>

                    <Link to='/Fotos'>
                        <li>Fotos</li>
                    </Link>

                    <Link to='/Comentarios'>
                        <li>Comentarios</li>
                    </Link>
                </ul>
            </nav>
        </header>
        <div id="banner"></div>
    <div id="trailer-container">
      <div class="content">
        <video class="trailer" controls>
          <source src={Video} />
          seu navegador não tem suporte para video
        </video>
        <div id="sinopse">
          <p class="description">
            Após dois anos espreitando as ruas como batman, Bruce Wayne se
            encontra nas profundezas mais sombrias de Gothan City, com poucos
            aliados confiaveis, o vigilante solitario se estabelce como a
            personificação da vingança para a população.
          </p>
          <button class="button">compra ingresso</button>
        </div>
      </div>
    </div>
    <div class="actor-cards-container">
      <div class="cards-content">
        <div class="card banner1">robert pattison - batman</div>
        <div class="card banner2">zoe kravitz - mulher gato</div>
        <div class="card banner3">jeffrey wrigth - gordon</div>
      </div>
    </div>
    <footer>
      <img id="logo" src={Logo} />
      <span>todos os direitos resevados ©copy</span>
      <span>desenvolvido por: wesley silva</span>
      <nav class="footer-navigation">
        <ul class="footer-list">
          <a href="./index.html">
            <li>Home</li>
          </a>
          <a href="./contatos.html">
            <li>contatos</li>
          </a>
          <a href="./fotos.html">
            <li>fotos</li>
          </a>
          <a href="./comentarios.html">
            <li>comentarios</li>
          </a>
        </ul>
      </nav>
    </footer>
        </>
    )
}

export default Header;