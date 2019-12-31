const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="collectorList" subpath="ns2:loansout_botgarden">
              <Field name="collector" />
            </Field>

            <Field name="loanOutDate" />
            <Field name="loanOutNumber" />

            <Panel name="phenologyGroup">
              <Field name="sterile" subpath="ns2:loansout_botgarden" />

              <Row>
                <Field name="fertile" subpath="ns2:loansout_botgarden" />
                <Field name="flowering" subpath="ns2:loansout_botgarden" />
                <Field name="fruiting" subpath="ns2:loansout_botgarden" />
                <Field name="inSpore" subpath="ns2:loansout_botgarden" />
              </Row>
            </Panel>
          </Col>

          <Col>
            <Field name="hortWild" subpath="ns2:loansout_botgarden" />
            <Field name="gardenLocation" subpath="ns2:loansout_botgarden" />
            <Field name="loanPurpose" />
            <Field name="loanOutNote" />
          </Col>
        </Cols>

        <Field name="fieldCollectionNote" subpath="ns2:loansout_botgarden" />
        <Field name="annotation" subpath="ns2:loansout_botgarden" />

        <Cols>
          <Col>
            <Field name="borrower" />
            <Field name="numLent" subpath="ns2:loansout_naturalhistory_extension" />
            <Field name="sheetAccessionNumber" subpath="ns2:loansout_botgarden" />
          </Col>

          <Col>
            <Field name="lendersAuthorizer" />
            <Field name="reviewComplete" subpath="ns2:loansout_botgarden" />
            <Field name="labelRequested" subpath="ns2:loansout_botgarden" />
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
