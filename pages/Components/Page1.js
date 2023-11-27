import Header from './Header'
export default function Page1() {
  return (
    <section className="p-5">
      <Header />
      <div className="d-flex flex-column gap-3">
        <h2 className="mt-5">FIXED TERM AGREEMENT</h2>
        <p>between</p>
        <h3 className="text-center">BMF ATTORNEYS</h3>{' '}
        <h4 className="text-center">
          with company registration number 2022/123456/07
        </h4>{' '}
        <p>and</p>{' '}
        <input
          type="text"
          className="form-control"
          placeholder="INSERT CLIENT NAME"
        />
        <p>Collectively referred herein as the “parties”</p>
      </div>{' '}
    </section>
  )
}
