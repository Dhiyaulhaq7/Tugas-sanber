describe('Belajar API Platzi dari Nol', () => {

  it('Skenario 1: Mengambil semua kategori produk', () => {
    // 1. Kita suruh Cypress buat nembak URL Platzi
    cy.request('GET', 'https://api.escuelajs.co/api/v1/categories')
      .then((response) => {
        
        expect(response.status).to.eq(200)

        expect(response.body).to.be.an('array')

        expect(response.body).to.have.length.of.at.least(1)
      })
  })

it('Skenario 2: Mengambil kategori produk berdasarkan id', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/categories/3')
      .then((response) => {
        
        expect(response.status).to.eq(200)

        expect(response.body).to.be.an('object')

        expect(response.body).to.have.property('id', 3)

        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('image')
        
        cy.log('Nama Kategori ID 3:', response.body.name)
      })
  })

it('Skenario 3: Mengambil kategori produk berdasarkan id', () => {
    cy.request('GET', 'https://api.escuelajs.co/api/v1/categories/72')
      .then((response) => {
        
        expect(response.status).to.eq(200)

        expect(response.body).to.be.an('object')

        expect(response.body).to.have.property('id', 72)

        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('image')
        
        cy.log('Nama Kategori ID 72:', response.body.name)
      })
  })

//   it('Skenario 4: Membuat kategori baru', () => {
//     cy.request({
//       method: 'POST',
//       url: 'https://api.escuelajs.co/api/v1/categories/',
//       body: {
//         name: 'Gufron',
//         image: 'https://picsum.photos/640/480' // Mengganti link lama yang sudah mati
//       }
//     }).then((respone) => {

//       // 1. Cek status code untuk pembuat data baru (POST) harus 201
//       expect(respone.status).to.eq(201)

//       // 2. Cek apakah nama yang dibalikin sama dengan yang kita input
//       expect(respone.body.name).to.eq('Gufron')

//       // 3. Pastikan server otomatis membuatkan properti ID
//       expect(respone.body).to.have.property('id')

//       // Kita intip hasilnya di log Cypress
//       cy.log('Kategori Gufron berhasil dibuat dengan ID:', respone.body.id)
//     })
//   })

//   it('Skenario 5: Mengambil kategori yang sudah dibuat', () => {
//     // 3. Kita panggil URL-nya digabung dengan variabel ID yang tadi sudah disimpan
//     cy.request({
//       method: 'GET',
//       url: 'https://api.escuelajs.co/api/v1/categories/99'
//     }).then((respone) => {
      
//       // 4. Masukkan syarat-syarat validasinya
//       expect(respone.status).to.eq(200)
//       expect(respone.body).to.be.an('object')
      
//       // Pastikan namanya beneran "Gufron" sesuai yang dibikin sebelumnya
//       expect(respone.body.name).to.eq('Gufron')
//     })
//   })

  it('Skenario 6: Mengambil Semua kaegori Product', () => {
    cy.request({
        method: 'GET',
        url:'https://api.escuelajs.co/api/v1/products'
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
    })
  })

  it('Skenario 7: Mengambil kategori product berdasarkan id', () => {
    cy.request({
        method: 'GET',
        url: 'https://api.escuelajs.co/api/v1/products/130'
    }).then((respone)=>{
        expect(respone.status).to.eq(200)
        expect(respone.body).to.be.an('object')
        expect(respone.body).to.have.property('id',130)
    })
  })

  it('Skenario 8: Mengambil Kategori Product berdasarkan id', () => {
    cy.request({
        method: 'GET',
        url: 'https://api.escuelajs.co/api/v1/products/31'
    }).then((respone)=>{
        expect(respone.status).to.eq(200)
        expect(respone.body).to.be.an('object')
        expect(respone.body).to.be.have.property('id', 31)
    })
  })

//  it('Skenario 9: Menambuat Product Baru', () => {
//     cy.request({
//     method: 'POST',
//     url: 'https://api.escuelajs.co/api/v1/products',
//     body: {
//         title: 'Gufron',
//         price: 10000,
//         description:"Mamang Gufron",
//         categoryID: 69,
//         image: 'https://picsum.photos/640/480' // Mengganti link lama yang sudah mati
//     }
//     }).then((respone)=>{
//         expect(respone.status).to.eq(201)
//         expect(respone.body.name).to.eq('Gufron')
//         expect(respone.body).to.have.property('id')
//     })
//  })

//  it('Skenario 10: Mengambil product yang baru saja dibuat', () =>{
//     cy.request({
//         method: 'GET',
//         url: 'https://api.escuelajs.co/api/v1/products/'
//     }).then((response) => {
//         expect(response.status).to.eq(200)
//         expect(response.body).to.be.an('object')
//         expect(response.body.name).to.eq('Gufron')
//     })
//  })

it("Skenario 11: Mengambil data Users", () =>{
    cy.request({
        method: 'GET',
        url: 'https://api.escuelajs.co/api/v1/users'
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.length.of.at.least(1)
    })   
})

it("Skenario 12: Mengambil data users berdasarkan id", () =>{
    cy.request({
        method: 'GET',
        url: 'https://api.escuelajs.co/api/v1/users/31'
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('object')
    })
})

})