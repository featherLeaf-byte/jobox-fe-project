import Header from './Header'
import Footer from './Footer'
export default function Page2() {
  return (
    <section className="flex-container p-5">
      <div>
        <Header />
        <ol>
          <li className="mb-3">
            <h5>Payment Terms:</h5>
            <ul>
              <li>
                BMF Attorney’s fee{' '}
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    R
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Insert Payment Amount"
                    aria-describedby="basic-addon1"
                  />
                </div>
                (excluding VAT). The retainer fee can be paid upfront, or
                month-to-month and the payment terms can be payable as follows:
                <ul>
                  <li>
                    Upfront:
                    <ul>
                      <li>
                        Three-twelfths of the fee during the probation period in
                        3 equal instalments by the 7th day of each month
                      </li>
                      <li>
                        Nine-twelfths of the fee upon conclusion of the
                        probation period of employment payable on the 7th day of
                        the 4th month.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Month-to-month:
                    <ul>
                      <li>
                        The month-to-month fee shall be paid by the 7th day of
                        each month
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                No variation or amendment to this Agreement shall be of any
                effect unless such amendment is put in writing and signed by all
                parties
              </li>
              <li>
                Any documentation prepared by <strong>BMF Attorneys</strong>{' '}
                remains its property
              </li>
            </ul>
          </li>
          <li className="mb-3">
            Appointment
            <ol>
              <li>
                The Client has procured the services of{' '}
                <strong>BMF Attorneys</strong> and hereby accepts the
                appointment as an independent contractor of the Client for a
                fixed period of time.{' '}
              </li>
              <li>
                The reason for this fixed-term contract is{' '}
                <strong>for the appointment and completion of the</strong>{' '}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Service Description"
                />{' '}
              </li>
            </ol>
          </li>
          <li className="mb-3">
            Duration
            <ol>
              <li>
                Notwithstanding the date of signature hereof, this fixed term
                contract shall be deemed to have commenced on the{' '}
                <input type="date" className="form-control" /> and will
                terminate, without further notice, on the{' '}
                <input type="date" className="form-control" />.{' '}
              </li>
              <li>
                The automatic termination of the contract on the Termination
                Date shall not be construed as a dismissal but as the completion
                of a fixed term contract.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div className="mt-3">
        <Footer pg={2} />
      </div>
    </section>
  )
}
