<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard>
          <CCardHeader>
            <strong>Information </strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="4">
                <CInput
                  label="Shopping card / Pack no. / Member Card"
                  placeholder="enter your card number"
                />
              </CCol>
              <CCol sm="2">
                <CInput label="Order no." placeholder="enter your order no" />
              </CCol>
              <CCol sm="6">
                <CInput
                  label="Passport no."
                  placeholder="enter your passport no"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="2">
                <CInput label="Customer's name" readonly="true" />
              </CCol>
              <CCol sm="8">
                <CInput label="Recipient information detail" readonly="true" />
              </CCol>
              <CCol sm="2" style="padding-top: 5px">
                <CButton block color="primary" class="mt-4"
                  >Recipient (F8)</CButton
                >
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="12">
        <CCardHeader>
          <strong>Packing Detail </strong>
        </CCardHeader>
        <CCardBody></CCardBody>
      </CCol>
    </CRow>
    <CRow>
      <CCol lg="6">
        <CTableWrapper :items="getShuffledUsersData()">
          <template #header>
            <CIcon name="cil-grid"/> Simple Table
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/nav" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </template>
        </CTableWrapper>
      </CCol>

      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          striped
          caption="Striped Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          small
          caption="Condensed Table"
        />
      </CCol>

      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          fixed
          border
          caption="Bordered Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          caption="Combined All Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          dark
          caption="Combined All dark Table"
        />
      </CCol>
    </CRow>
    <CButtonGroup
      class="align-items-center mb-2 col-md-4 order-md-2 offset-lg-8"
      size="sm"
    >
      <CButton color="success">Save (F11)</CButton>
      <CButton color="danger">Clear (F3)</CButton>
      <CButton color="warning">Print (F7)</CButton>
    </CButtonGroup>
  </div>
</template>

<script>
import CTableWrapper from '../../base/Table.vue'
import usersData from '../../users/UsersData'

export default {
  name: "CustomerTake",
  components: { CTableWrapper },
  data() {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label: "col-3", input: "col-9" },
      options: ["Option 1", "Option 2", "Option 3"],
      selectOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
        {
          value: "some value",
          label: "Selected option",
        },
      ],
      selectedOption: "some value",

      formCollapsed: true,
      checkboxNames: [
        "Checkboxes",
        "Inline Checkboxes",
        "Checkboxes - custom",
        "Inline Checkboxes - custom",
      ],
      radioNames: [
        "Radios",
        "Inline Radios",
        "Radios - custom",
        "Inline Radios - custom",
      ], 
    };
  },
  methods: {
    validator(val) {
      return val ? val.length >= 4 : false;
    },shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    }
  }, 
};
</script>
