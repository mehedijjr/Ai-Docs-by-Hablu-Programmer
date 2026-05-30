import { Container } from "../Container"


export const Note = () => {
  return (
    <section className="mt-12.5 sm:mt-20 lg:mt-25 xl:mt-37.5 px-2.5">
        <Container className="bg-primary rounded-[20px] py-14 pr-16 pl-10">
            <h2 className="text-4xl text-white">
                Ready to Simplify Your Document Management?
            </h2>
            <p className="text-white">Sign up today and experience the power of AI-driven legal documentation.</p>

            <button className="text-muted bg-white">Get Started Now</button>
        </Container>
    </section>
  )
};
