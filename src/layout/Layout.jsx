import { Footer } from './Footer'
import { Nav } from './Nav'
import { Main } from './Main'

export const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}
