import Header from './Header'
import Footer from './Footer'
export default function Page3() {
  return (
    <section
      className="flex-container p-5"
      style={{ paddingTop: '150px!important' }}
    >
      <div>
        <Header />
        <ol start="4">
          <li>
            <p className="mt-5">
              Signed at _________________________ on
              _________________________________
            </p>
            <p className="border-top mt-5 signature">
              Who warrant authority on behalf of Joboc
            </p>
            <p className="mt-3">
              Signed at _________________________ on{' '}
              _________________________________{' '}
            </p>
            <p className="border-top mt-5 signature">
              Who warrants authority on behalf of
            </p>
          </li>
        </ol>
      </div>
      <div>
        <Footer pg={3} />
      </div>
    </section>
  )
}
