import { Card } from "flowbite-react"
import pp from "../assets/pppp.jpeg"

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-4 pt-4 flex-wrap">
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Profile Image"
                        height="96"
                        src={pp}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Andra Alfairuz Medani</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Student</span>
                </div>
                <div className="coloumn py-4 sm:text-center md:text-left">
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Contact</h4>
                    <h5>Email namanyaxalf@gmail.com</h5>
                    <h5>Phone : +62 813-1247-1720</h5>
                    <h5>Github: github.com/Romanoffy</h5>
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-4">Summary</h4>
                    <h5>Saya adalah siswa jurusan pengembangan perangkat lunak dan gim di sekolah menengah kejuruan, dengan minat besar dalam menciptakan solusi digital yang inovatif. Saya bercita-cita mengembangkan aplikasi atau website yang dapat membantu usaha atau produk untuk berkembang melalui pengelolaan yang efisien, publikasi kreatif, pemasaran yang strategis, dan promosi yang efektif. Dengan pengalaman dalam pengembangan berbagai proyek berbasis web, saya terus belajar untuk memperkuat kemampuan teknis dan kreativitas guna memberikan dampak nyata di dunia teknologi.</h5>
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-4">Skills</h4>
                    <h5 className="mb-1 text-grey-700 dark:text-grey-300 font-semibold  ">Hard Skills</h5>
                    <ul className="list-disc pl-5">
                        <li>Pemrograman Web : HTML, CSS, JavaScript </li>
                            <li>Framework : Bootsrap, React</li>
                            <li>Pengelolaan Database : MySQL</li>
                            <li>Pengembangan Backend : PHP </li>
                            <li>Dasar Pengembangan Gim : C#</li>
                            <li>Penggunaan Tools : Git, Visual Studio Code</li>
                    </ul>
                    <h5 className="mb-1 text-grey-700 dark:text-grey-300 font-semibold mt-4">Soft Skills</h5>
                    <ul className="list-disc pl-5">
                        <li>Komunikasi </li>
                            <li>Problem Solving</li>
                            <li>Improvisasi</li>
                            <li>Adaptasi</li>
                            <li>Teamwork</li>
                            <li>Kolaborasi</li>
                            <li>Kreativitas</li>
                            <li>Menghargai Waktu</li>
                            <li>Peduli Dengan Hal Kecil</li>
                    </ul>
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-4">Hobbies</h4>
                    <ul className="list-disc pl-5">
                        <li>Bermain Game</li>
                            <li>Mendengarkan Musik</li>
                            <li>Tertarik Dengan Atletik</li>
                            <li>Improvisasi</li>
                    </ul>
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-4">Projects</h4>
                    <h5 className="mb-1 text-grey-700 dark:text-grey-300 font-semibold mt-4">Web To do List (HTML, CSS, JavaScript)</h5>
                    <ul className="list-disc pl-5">
                        <li>Aplikasi berbasis web yang membantu pengguna mencatat dan mengelola <br />daftar tugas sehari-hari. Proyek ini memanfaatkan HTML, CSS, JavaScript.</li>
                           
                    </ul>
                    <h5 className="mb-1 text-grey-700 dark:text-grey-300 font-semibold mt-4">Web Marketplace (HTML, CSS, JavaScript)</h5>
                    <ul className="list-disc pl-5">
                        <li>Platform e-commerce sederhana untuk pembeli dan penjual, dengan fitur <br /> pencarian produk, keranjang belanja, dan checkout.</li>
                           
                    </ul>
                    <h5 className="mb-1 text-grey-700 dark:text-grey-300 font-semibold mt-4">Web Aritmatika (HTML, JavaScript)</h5>
                    <ul className="list-disc pl-5">
                        <li>Beberapa aplikasi web untuk perhitungan matematis sederhana seperti <br /> penjumlahan, pengurangan, dan operasi lainnya.</li>
                           
                    </ul>
                    
                </div>
                
            </div>
        </Card>
        
    )
}

export default Profile