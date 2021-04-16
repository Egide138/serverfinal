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
             done();
         })
     })

 })
 describe('post/api', ()=>{
     beforeEach(async()=>{
       await Blog.deleteMany({})
     })
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
 
 describe('get/api/post', ()=>{
    beforeEach(async()=>{
      await Blog.deleteMany({})
    })
    it('it shoud get one post',(done)=>{
   chai.request(server)
   
   .post('/blog')
   .send({title:'andela', body:'Trainning center'})
   .then((res)=>{

       const postId=res.body.post._id
       
       chai.request(server)
       .get(`/blog/${postId}`)
       .then((response)=>{
           const body=response.body
           body.post.should.have.property('_id')
           body.post.should.have.property('title')
           body.post.should.have.property('body')
           done();
           })
        })
   })
   
    
})
describe('post/api/comment', ()=>{
    beforeEach(async()=>{
      await Blog.deleteMany({})
    })
    it('it shoud post a comment',(done)=>{
   chai.request(server)
   
   .post('/blog')
   .send({title:'andela', body:'Trainning center'})
   .then((res)=>{

       const postId=res.body.post._id
       
       chai.request(server)
       .post(`/blog/${postId}/comment`)
       .send({comment:"great article"})
       .then((response)=>{
           response.should.be.status(201)
           const body=response.body
           body.comment.should.have.property('_id')
           body.comment.should.have.property('comment')
           
           done();
           })
        })
   })
   
    
})
describe('get/api/comment', ()=>{

    })
    it('it shoud get a comment',(done)=>{
   chai.request(server)
    .post('/blog')
   .send({title:'andela', body:'Trainning center'})
   .then((res)=>{

       const postId=res.body.post._id
        chai.request(server)
       .post(`/blog/${postId}/comment`)
       .send({comment:"great article"})
       .then((response)=>{
    // const body=response
    chai.request(server)
    .get(`/blog/${postId}/comment`)
        .then((resp)=>{

        resp.should.be.status(200)
        const body=resp.body
        // console.log(body);
        body.message[0].should.have.property('_id')
        body.message[0].should.have.property('comment');
        body.message.should.have.property('length', 1)
                          
         done();
            })
        })
       })
        })

        describe('get/api/post', ()=>{
            beforeEach(async()=>{
                await Blog.deleteMany({})
              })
              it('it shoud not get all post',(done)=>{
                chai.request(server)
                .post('/blog')
                .send({title:'demo',body:'wonderful experience'})
                .then((resp)=>{

                    chai.request(server)
                    .get('/null')
                    .end((err,response)=>{
                        response.should.be.status(404)
                        
                        done();
                })
       
                })
            })
       
        })
   
        describe('post/api', ()=>{
            beforeEach(async()=>{
                await Blog.deleteMany({})
              })
              it('it shoud not post',(done)=>{
                chai.request(server)
                .post('/blog')
                .send({body:'wonderful experience'})
                .then((resp)=>{

                    resp.should.have.status(500)
                        done();
                })
       
                })
            })
            describe('post/api/comment', ()=>{
                beforeEach(async()=>{
                  await Blog.deleteMany({})
                })
                it.skip('it shoud not post a comment',(done)=>{
               
                   chai.request(server)
                   .post(`/blog/undefined/comment`)
                   .send({comment:"great article"})
                   .then((response)=>{
                       response.should.be.status(500)
                       
                       
                       done();
                       })
                    })
               
            })
            describe('get/api/comment', ()=>{

            })
            it('it shoud not get a comment',(done)=>{
           chai.request(server)
            .post('/blog')
           .send({title:'andela', body:'Trainning center'})
           .then((res)=>{
        
               const postId=res.body.post._id
                chai.request(server)
               .post(`/blog/${postId}/comment`)
               .send({comment:"great article"})
               .then((response)=>{
            
            chai.request(server)
            .get(`/blog/undefined/comment`)
                .then((resp)=>{
        
                resp.should.be.status(500)
             done();
                    })
                })
               })
                })