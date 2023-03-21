import Aside from "./Aside";
import Nav from "./Nav";

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className='grid grid-cols-12 mb-0 pb-0' id='container' style={
            {
                height: '100vh',
                overflowY: 'hidden',
                marginBottom: 0
            }
        }>
            <Nav />
            <main className='col-span-7 pt-10 px-20 bg-[rgba(241,246,251,255)]   dark:bg-mirage-600 '>
                {children}
            </main>
            <Aside />
        </div>
    )
}
