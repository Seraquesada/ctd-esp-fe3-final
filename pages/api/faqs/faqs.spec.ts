import { faqsData } from 'dh-marvel/components/faqs/faqsData';
import { createMocks } from 'node-mocks-http';
import handleFaqs from "dh-marvel/pages/api/faqs/index.route";
import { FaqsType } from 'dh-marvel/interface/faqs';


describe("Faqs", () => {
    describe('when sending a non GET request', () => {
        it('should return a 405 error', async () => {
            const { req, res } = createMocks({
                method: 'POST',
            });
            await handleFaqs(req, res);
            expect(res._getStatusCode()).toBe(405)
            expect(JSON.parse(res._getData())).toEqual({ message: "Método no permitido" });
        })
    })
    describe('when sending a GET request', () => {
        it('should return a 200 status', async () => {
            const { req, res } = createMocks({
                method: 'GET',
            });
            await handleFaqs(req, res);
            expect(res._getStatusCode()).toBe(200)
            expect(JSON.parse(res._getData())).toMatchObject(faqsData);
        })
    })
})