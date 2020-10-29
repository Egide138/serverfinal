import chai from 'chai'
import chaiHttp from 'chai-http';
import server from '../index.js'
import Blog from '../models/blog.js'
chai.should();
chai.use(chaiHttp)
 describe('get/api/post', ()=>{
     it('it shoud get all post',(done)=>{

         chai.request(server)
         .get('/blog')
         .end((err,response)=>{
             response.should.be.status(200)
             response.body.post.should.be.a('array')
             response.body.should.be.a('object')
             response.body.should.have.property('message')
             response.body.should.have.property('post')
             response.body.post.should.have.property('title')
             response.body.post.should.have.property('body')
             done();
         })
     })

 })
 describe('get/api/post', ()=>{
     it('it shoud  post ',(done)=>{
    chai.request(server)
    .post('/blog')
    .send({ title:'soft',body:'software developer'})
    .then((response)=>{
        const body=response.body
        body.post.should.have.property('_id')
        body.post.should.have.property('title')
        body.post.should.have.property('body')
        done();
        })
     })
     
 })
