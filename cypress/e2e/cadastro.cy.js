describe('validação de usuário', () => {
  
  beforeEach(() => {
    //1 Visitar o automation exercise
    cy.visit('https://automationexercise.com/');
  });

  it('cadastrar usuário', () => {
    
    const h1Txt = "AutomationExercise";
    const h2SignUp = 'New User Signup!';
    const h2UserCreated = 'Account Create';
    const userInfo = {

      nome: 'Blastoise',
      sobrenome: 'Sauro',
      senha: 123456,
      dia: 1,
      mes: 1,
      ano: '2000',
      empresa: 'byron',
      endereco: 'imc - sala lp3',
      pais: 'New Zealand',
      estado: 'Mg',
      cidade: 'Itajuba',
      cep: '37500-000',
      celular: '9-9999 9999' 
    }

    //3.1 Verificar se o h1 está disponível
    cy.get('#slider-carousel > div > div:nth-child(1) > div:nth-child(1) > h1').should('be.visible');

    //3.2 Verificar se o texto está correto
    cy.get('#slider-carousel > div > div:nth-child(1) > div:nth-child(1) > h1').should('contain',h1Txt);

    //4 clicar no botão SignUp/Login
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click();

    //5 verificar que o texto New User Signup está disponível
    cy.get('#form > div > div > div:nth-child(3) > div > h2').should('contain',h2SignUp);

    //6 entrar com nome e email
    cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').type('Blastoise');
    cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').type('blastoise@teste.com.br');

    //7 clicar no botão Signup
    cy.get('#form > div > div > div:nth-child(3) > div > form > button').click();

    //9 preencher campos iniciais
    cy.get('#id_gender1').check();

    cy.get('#password').type(userInfo.senha);
    cy.get('#days').select(userInfo.dia);
    cy.get('#months').select(userInfo.mes);
    cy.get('#years').select(userInfo.ano);

    cy.get('#first_name').type(userInfo.nome);
    cy.get('#last_name').type(userInfo.sobrenome);
    cy.get('#address1').type(userInfo.endereco);
    cy.get('#company').type(userInfo.empresa);
    cy.get('#country').select(userInfo.pais);
    cy.get('#state').type(userInfo.estado);

    cy.get('#city').type(userInfo.cidade);
    cy.get('#zipcode').type(userInfo.cep);

    cy.get('#mobile_number').type(userInfo.celular);

    //10 clicar no botao criar user
    cy.get('#form > div > div > div > div > form > button').click();

    //11 verificar conta criada.
    cy.get('#form > div > div > div > h2 > b').should('contain', h2UserCreated);

    //12 clicar no botão continue
    cy.get('#form > div > div > div > div > a').click();

    //13 deletar conta
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a').click();

    cy.get('#form > div > div > div > div > a').click();
  })




})