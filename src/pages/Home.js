import Header from '../components/Header';
import Nav from "../components/Nav";

function Home () {

    return (
        <section>
            <Nav />
            <div   class="flex container">
                <h1>Home</h1>
                <div class="items w-100 m-20">
                    <div class="flex">Item 1</div>
                    <div class="flex">Item 2</div>
                    <div class="flex">Item 3</div>
                </div>
            </div>
        </section>
    )

}

export default Home;