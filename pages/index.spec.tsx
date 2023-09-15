import {render, screen} from "@testing-library/react";
import { IData, } from 'dh-marvel/interface/comic';
import Index from "dh-marvel/pages/index.page";


describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index />)
            const title = screen.getByText('Marvel Api Project')
            expect(title).toBeInTheDocument()
        })
    })
    describe("",()=>{
        it('should render 12 items', () => {
            render(<Index />)
            const title = screen.getByText('Marvel Api Project')
            expect(title).toBeInTheDocument()
        })
    })

})