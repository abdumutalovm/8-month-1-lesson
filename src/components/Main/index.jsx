import React from 'react'
import project1 from '../../assets/Icon.png'
import project2 from '../../assets/icon1.png'
import chart1 from '../../assets/chart1.svg'
import chart2 from '../../assets/chart2.svg'
import feed1 from '../../assets/feed1.svg'
import feed2 from '../../assets/feed2.svg'

import int1 from '../../assets/int1.svg'
import int2 from '../../assets/int2.svg'
import int3 from '../../assets/int3.svg'
import int4 from '../../assets/int4.svg'
import int5 from '../../assets/int5.svg'

import pen from '../../assets/penci.svg'

import dot from '../../assets/blue_dot.png'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: 'SMS yuborilganlar',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Linkga kirganlar',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mahsulot sahifasiga kirganlar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Sotib olganlar',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Izoh qoldirganlar',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },

];


function Main() {
    return (
        <main>

            <div className='main_wrapper'>

                <div className='all_mains'>
                    <div className='mainS'>
                        <img src={project1} alt="" />
                        <div>
                            <p>Tracking loyihalari</p>
                            <h5>5 ta</h5>
                            <h6>(7 ta subloyiha)</h6>
                        </div>
                    </div>

                    <div className='mainS'>
                        <img src={project2} alt="" />
                        <div>
                            <p>Sharh olish loyihalari</p>
                            <h5>15 ta</h5>
                            <h6>(7 ta subloyiha)</h6>
                        </div>
                    </div>

                    <div className='mainS'>
                        <img src={project1} alt="" />
                        <div>
                            <p>Mijozlar</p>
                            <h5>12,345 ta</h5>
                            <h6>(563 ta saralanmagan)</h6>
                        </div>
                    </div>
                </div>


                <div>
                    <div className='chart'>
                        <h1>Tracking loyihasi</h1>
                        <hr />
                        <BarChart
                            width={1172}
                            height={524}
                            data={data}
                            margin={{
                                top: 5,
                                right: 120,
                                bottom: 5,
                            }}

                            barSize={20}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </div>

                    <div>
                        <div className='tags'>
                            <div className='header_tags'>
                                <h1 className='text2'>#Tag lar</h1>
                                <div>
                                    <h2>120 ta</h2>
                                    <p>umumiy #tag lar soni</p>
                                </div>
                            </div>

                            <hr />

                            <div className='tags_footer'>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                                <div className='tag'>
                                    <img src={dot} alt="" />
                                    <h5>Bolalar uchun</h5>
                                    <h4>15.7k</h4>
                                </div>
                            </div>

                        </div>



                    </div>

                </div>

            </div>

            <div className='right_wrapper'>
                <div className='right_about'>
                    <div className='block1'>
                        <h4>1 oylik SMS lar</h4>
                        <hr className='hr1' />
                        <h5>Umumiy</h5>
                        <h3>1000 ta</h3>
                        <hr className='hr2' />
                    </div>
                    <div className='chart1'>
                        <img src={chart2} alt="chart2" className='img1' />
                        <div className='chart2_about'>
                            <h5>740 ta</h5>
                            <h4>Yetib borgan</h4>
                        </div>
                    </div>
                    <div className='chart1'>
                        <img src={chart1} alt="chart1" className='img2' />
                        <div className='chart2_about'>
                            <h5>260 ta</h5>
                            <h4>Hatolik bo'lgan</h4>
                        </div>
                    </div>

                </div>

                <div className='right_about2'>
                    <img src={feed2} alt="" className='feed2' />
                    <div className='info'>
                        <div >
                            <h1>234 ta</h1>
                            <p>bu oygi feedbacklar</p>
                        </div>
                        <img src={feed1} alt="" className='feed1' />
                    </div>
                </div>

                <div className='right_about3'>
                    <h1>Integratsiyalar</h1>
                    <div>
                        <div className='int1_wrapper'>
                            <img src={int5} width={42} height={42} alt="int1" />
                            <div>
                                <h3>AmoCrm</h3>
                                <h2>CRM</h2>
                            </div>
                            <img src={pen} alt="" />
                        </div>

                        <div className='int1_wrapper'>
                            <img src={int1} width={42} height={42} alt="int1" />
                            <div>
                                <h3>TelegramBot</h3>
                                <h2>Habar yuboruvchi</h2>
                            </div>
                            <img src={pen} alt="" />
                        </div>

                        <div className='int1_wrapper'>
                            <img src={int2} width={42} height={42} alt="int1" />
                            <div>
                                <h3>Trello</h3>
                                <h2>Task Management</h2>
                            </div>
                            <img src={pen} alt="" />
                        </div>

                        <div className='int1_wrapper'>
                            <img src={int3} width={42} height={42} alt="int1" />
                            <div>
                                <h3>Bitrix</h3>
                                <h2>CRM</h2>
                            </div>
                            <img src={pen} alt="" />
                        </div>

                        <div className='int1_wrapper'>
                            <img src={int4} width={42} height={42} alt="int1" />
                            <div>
                                <h3>Bitrix</h3>
                                <h2>CRM</h2>
                            </div>
                            <img src={pen} alt="" />
                        </div>
                        <hr className='hr' />
                        <h1 className='text1'>Barcha integratsiyalar</h1>
                    </div>
                </div>

            </div>


        </main>
    )
}

export default Main