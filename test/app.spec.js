const app = require('../app')
const request = require('supertest')
const chai = require('chai')
const expect = chai.expect

describe('로그인 테스트', () => {
    let token

    it('로그인 성공 시 token을 받는다.', async () => {
        const response = await request(app).post('/users/auth').send({
            snsId: 123,
            nickName: 'abc',
        })
        token = response.body.token
        console.log(token)
        expect(response.status).equal(200)
    })

    it('회원 정보 수정 시 수정된 내용이 DB에 적용되고 token을 받는다.', async () => {
        
    })
})