<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard accent-color="info">
          <CCardHeader>
            <strong>Information </strong>
          </CCardHeader>
          <CCardBody style="padding: 15px">
            <CRow>
              <CCol sm="4">
                <CInput
                  label="Shopping card / Pack no. / Member Card"
                  placeholder="enter your card number"
                  block
                  size="sm"
                />
              </CCol>
              <CCol sm="2">
                <CInput
                  label="Order no."
                  placeholder="enter your order no"
                  block
                  size="sm"
                />
              </CCol>
              <CCol sm="6">
                <CInput
                  label="Passport no."
                  placeholder="enter your passport no"
                  block
                  size="sm"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="2">
                <CInput
                  label="Customer's name"
                  readonly="true"
                  block
                  size="sm"
                />
              </CCol>
              <CCol sm="8">
                <CInput
                  label="Recipient information detail"
                  readonly="true"
                  block
                  size="sm"
                />
              </CCol>
              <CCol sm="2" style="padding-top: 12px">
                <CButton block size="sm" color="primary" class="mt-4"
                  >Recipient (F8)</CButton
                >
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="12">
        <CCard accent-color="info" v-if="show">
          <CCardHeader @click="isCollapsed = !isCollapsed">
            <strong>Packing Detail </strong>
            <div class="card-header-actions">
              <CLink
                class="card-header-action btn-minimize"
              >
                <CIcon
                  :name="`cil-chevron-${isCollapsed ? 'bottom' : 'top'}`"
                />
              </CLink>
            </div>
          </CCardHeader>
          <CCollapse :show="isCollapsed" :duration="400">
            <CCardBody>
              <CDataTable
                :items="items"
                :fields="fields"
                :items-per-page="5"
                :border="true"
                hover
                pagination
              >
                <template #status="{ item }">
                  <td>
                    <CBadge :color="getBadge(item.status)">
                      {{ item.status }}
                    </CBadge>
                  </td>
                </template>
                <template #show_details="{ item, index }">
                  <td class="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      square
                      size="sm"
                      @click="toggleDetails(item, index)"
                    >
                      {{ Boolean(item._toggled) ? "Hide" : "Show" }}
                    </CButton>
                  </td>
                </template>
                <template #details="{ item }">
                  <CCollapse
                    :show="Boolean(item._toggled)"
                    :duration="collapseDuration"
                  >
                    <CCardBody>
                      <CMedia :aside-image-props="{ height: 102 }">
                        <h4>
                          {{ item.username }}
                        </h4>
                        <p class="text-muted">
                          User since: {{ item.registered }}
                        </p>
                        <CButton size="sm" color="info" class="">
                          User Settings
                        </CButton>
                        <CButton size="sm" color="danger" class="ml-1">
                          Delete
                        </CButton>
                      </CMedia>
                    </CCardBody>
                  </CCollapse>
                </template>
              </CDataTable>
            </CCardBody>
          </CCollapse>
        </CCard>
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
const items = [
  {
    issus: "Samppa Nori",
    username: "Samppa Nori",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
  },
  {
    username: "Estavan Lykos",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    username: "Chetan Mohamed",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    username: "Derick Maximinus",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    username: "Friderik Dávid",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Yiorgos Avraamu",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
  },
  {
    username: "Avram Tarasios",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
    _classes: "table-success",
  },
  {
    username: "Quintin Ed",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    username: "Enéas Kwadwo",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    username: "Agapetus Tadeáš",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Carwyn Fachtna",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
    _classes: "table-info",
  },
  {
    username: "Nehemiah Tatius",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    username: "Ebbe Gemariah",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    username: "Eustorgios Amulius",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    username: "Leopold Gáspár",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Pompeius René",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
  },
  {
    username: "Paĉjo Jadon",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    username: "Micheal Mercurius",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    username: "Ganesha Dubhghall",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    username: "Hiroto Šimun",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Vishnu Serghei",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
  },
  {
    username: "Zbyněk Phoibos",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    username: "Einar Randall",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
    _classes: "table-danger",
  },
  {
    username: "Félix Troels",
    registered: "2012/03/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Aulus Agmundr",
    registered: "2012/01/01",
    role: "Member",
    status: "Pending",
  },
];


const fields = [
  { key: "issusNo", _style: "min-width:150px" },
  { key: "orderNo", _style: "min-width:150px" },
  { key: "shoppingCard", _style: "min-width:150px" },
  { key: "hangingNo", _style: "min-width:150px" },
  { key: "packingNo", _style: "min-width:150px" },
  { key: "taxAbbNo", _style: "min-width:150px" },
  { key: "pickupCode", _style: "min-width:200px" },
  { key: "operatorCode", _style: "min-width:200px;" },
  { key: "status", _style: "min-width:100px;" },
  {
    key: "show_details",
    label: "",
    _style: "width:1%",
    sorter: false,
    filter: false,
  },
];

export default {
  name: "AdvancedTables",
  data() {
    return {
      items: items.map((item, id) => {
        return { ...item, id };
      }),
      fields,
      details: [],
      collapseDuration: 0,
      show: true,
      isCollapsed: true,
    };
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Banned":
          return "danger";
        default:
          "primary";
      }
    },
    toggleDetails(item) {
      this.$set(this.items[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
  },
};
</script>
