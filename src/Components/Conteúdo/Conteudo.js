import React from 'react'
import './Conteudo.css'
import Author from '../img/Img'
import CNN from '../img/Logo'

export default function Conteudo() {

    return(
        <div className="site__content">
            <div class="container--site">
                <div className="row">
                    <main className="post">
                        <article>
                            <header className="post__header">
                                <h1 className="post__title">
                                    Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos                    
                                </h1>
                                <p className="post__expert">
                                    A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada 
                                    pela linhagem original do novo coronavírus                    
                                </p>
                                <Author/>
                                <div className="higher__share"></div>
                                    <span className="post__data">
                                        24/08/2021 às 16:44 | Atualizado às 16:56                        
                                    </span>
                            </header>
                            <div className="post_content">
                            <div class="riddle-target-initialised"></div>
                                <div className="logo-cnn">
                                    <CNN/>
                                </div>
                            </div>
                            <p>
                                Por ser uma doença nova, a <a href="#">Covid-19</a> ainda não foi compreendida totalmente pela 
                                comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, 
                                incluindo os sintomas e os impactos para a saúde a curto e longo prazos.
                            </p>
                            <p>
                                A  <a href="#">variante Delta da Covid-19</a> originalmente conhecida como B.1.617.2, existe 
                                desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos 
                                países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% 
                                e 200% mais transmissível, dependendo de quem apresenta a estimativa.
                            </p>
                        </article>
                    </main>
                </div>
            </div>
        </div>
    )
}