const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    CompoundInput,
  } = configContext.inputComponents;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Field name="objectNumber" />
          <Field name="accessionDate" subpath="ns2:collectionobjects_botgarden" />
          <Field name="deadFlag" subpath="ns2:collectionobjects_botgarden" />
          <Field name="deadDate" subpath="ns2:collectionobjects_botgarden" />
        </Row>

        {/*
          This layout of taxonomicIdentGroup from the naturalhistory extension is unique to the
          botgarden profile's collectionobject form, so it's defined here, instead of using the
          form provided by the naturalhistory extension plugin. If any other profile wants to use
          this layout in the future, it can be moved into the naturalhistory extension plugin as an
          alternate form.
        */}
        <Field name="taxonomicIdentGroupList" subpath="ns2:collectionobjects_naturalhistory_extension">
          <Field name="taxonomicIdentGroup">
            <Panel>
              <InputTable name="taxonName">
                <Field name="taxon" />
                <Field name="qualifier" />
              </InputTable>

              <Row>
                <Field name="affinityTaxon" />
                <Field name="hybridFlag" />
              </Row>

              <Field name="taxonomicIdentHybridParentGroupList">
                <Field name="taxonomicIdentHybridParentGroup">
                  <Field name="taxonomicIdentHybridParent" />
                  <Field name="taxonomicIdentHybridParentQualifier" />
                </Field>
              </Field>

              <InputTable name="taxonReference">
                <Field name="reference" />
                <Field name="refPage" />
              </InputTable>

              <Row>
                <Field name="identKind" />
                <Field name="notes" />
              </Row>

              <InputTable name="taxonIdent">
                <Field name="identBy" />
                <Field name="identDateGroup" />
                <Field name="institution" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="recordStatus" />
          <Field name="provenanceType" subpath="ns2:collectionobjects_botgarden" />
          <Field name="rare" subpath="ns2:collectionobjects_botgarden" />
          <Field name="cultivated" subpath="ns2:collectionobjects_botgarden" />
          <Field name="cbdRestriction" subpath="ns2:collectionobjects_botgarden" />
        </Row>

        <Row>
          <Col>
            <Field name="requestedBy" subpath="ns2:collectionobjects_botgarden" />

            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>
          </Col>

          <Col>
            <Col>
              <Field name="namedCollections">
                <Field name="namedCollection" />
              </Field>
            </Col>

            <Field name="source" subpath="ns2:collectionobjects_botgarden" />
          </Col>
        </Row>

        <Field name="comments">
          <Field name="comment" />
        </Field>

        {extensions.naturalhistory.collectionobject.form.typeSpecimenGroupList}
      </Panel>

      <Panel name="locality" collapsible collapsed>
        <CompoundInput subpath="ns2:collectionobjects_naturalhistory_extension">
          {extensions.locality.form}
        </CompoundInput>
      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>

            <Field name="fieldCollectionNumber" />
            <Field name="fieldCollectionNumberAssignor" subpath="ns2:collectionobjects_botgarden" />
            <Field name="vegetationType" subpath="ns2:collectionobjects_naturalhistory_extension" />
          </Col>

          <Col>
            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectionNote" />

            <Field name="associatedTaxaGroupList" subpath="ns2:collectionobjects_naturalhistory_extension">
              <Field name="associatedTaxaGroup">
                <Field name="associatedTaxon" />
                <Field name="commonName" />
                <Field name="interaction" />
              </Field>
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Field name="sex" />

          <Col>
            <Field name="forms">
              <Field name="form" />
            </Field>
          </Col>

          <Field name="postToPublic" subpath="ns2:collectionobjects_botgarden" />
          <Field name="phase" />
        </Row>

        {extensions.annotation.collectionobject.form}

        <Panel name="accessionattributes">
          {extensions.accessionattributes.collectionobject.form}
        </Panel>
      </Panel>

      <Panel name="accessionuse" collapsible collapsed>
        {extensions.accessionuse.collectionobject.form}
      </Panel>

      <Panel name="hist" collapsible collapsed>
        <Panel name="assoc" collapsible collapsed>
          <Row>
            <Col>
              <Field name="assocActivityGroupList">
                <Field name="assocActivityGroup">
                  <Field name="assocActivity" />
                  <Field name="assocActivityType" />
                  <Field name="assocActivityNote" />
                </Field>
              </Field>

              <Field name="assocObjectGroupList">
                <Field name="assocObjectGroup">
                  <Field name="assocObject" />
                  <Field name="assocObjectType" />
                  <Field name="assocObjectNote" />
                </Field>
              </Field>

              <Field name="assocConceptGroupList">
                <Field name="assocConceptGroup">
                  <Field name="assocConcept" />
                  <Field name="assocConceptType" />
                  <Field name="assocConceptNote" />
                </Field>
              </Field>

              <Field name="assocCulturalContextGroupList">
                <Field name="assocCulturalContextGroup">
                  <Field name="assocCulturalContext" />
                  <Field name="assocCulturalContextType" />
                  <Field name="assocCulturalContextNote" />
                </Field>
              </Field>

              <Field name="assocOrganizationGroupList">
                <Field name="assocOrganizationGroup">
                  <Field name="assocOrganization" />
                  <Field name="assocOrganizationType" />
                  <Field name="assocOrganizationNote" />
                </Field>
              </Field>

              <Field name="assocPeopleGroupList">
                <Field name="assocPeopleGroup">
                  <Field name="assocPeople" />
                  <Field name="assocPeopleType" />
                  <Field name="assocPeopleNote" />
                </Field>
              </Field>

              <Field name="assocPersonGroupList">
                <Field name="assocPersonGroup">
                  <Field name="assocPerson" />
                  <Field name="assocPersonType" />
                  <Field name="assocPersonNote" />
                </Field>
              </Field>

              <Field name="assocPlaceGroupList">
                <Field name="assocPlaceGroup">
                  <Field name="assocPlace" />
                  <Field name="assocPlaceType" />
                  <Field name="assocPlaceNote" />
                </Field>
              </Field>
            </Col>

            <Col>
              <InputTable name="assocEvent">
                <Field name="assocEventName" />
                <Field name="assocEventNameType" />
              </InputTable>

              <Field name="assocEventOrganizations">
                <Field name="assocEventOrganization" />
              </Field>

              <Field name="assocEventPeoples">
                <Field name="assocEventPeople" />
              </Field>

              <Field name="assocEventPersons">
                <Field name="assocEventPerson" />
              </Field>

              <Field name="assocEventPlaces">
                <Field name="assocEventPlace" />
              </Field>

              <Field name="assocEventNote" />

              <Field name="assocDateGroupList">
                <Field name="assocDateGroup">
                  <Field name="assocStructuredDateGroup" />
                  <Field name="assocDateType" />
                  <Field name="assocDateNote" />
                </Field>
              </Field>
            </Col>
          </Row>
        </Panel>

        <Field name="objectHistoryNote" />

        <Field name="usageGroupList">
          <Field name="usageGroup">
            <Field name="usage" />
            <Field name="usageNote" />
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="owners">
              <Field name="owner" />
            </Field>

            <Field name="ownershipDateGroupList">
              <Field name="ownershipDateGroup" />
            </Field>
          </Col>

          <Col>
            <Row>
              <Field name="ownershipAccess" />
              <Field name="ownershipCategory" />
            </Row>

            <Field name="ownershipPlace" />
          </Col>
        </Row>

        <InputTable name="ownershipExchange">
          <Field name="ownershipExchangeMethod" />
          <Field name="ownershipExchangeNote" />
          <Field name="ownershipExchangePriceCurrency" />
          <Field name="ownershipExchangePriceValue" />
        </InputTable>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
