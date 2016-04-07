(function() {
   'use strict';

   describe('service doctors', function() {
      var doctorService;

      beforeEach(module('wombat'));

      beforeEach(inject(function(_doctorService_) {
         doctorService = _doctorService_;
      }));

      it('should be registered', function() {
         expect(doctorService).not.toEqual(null);
      });

      describe('getDoctors function', function() {
        
        var timeout;
        
        beforeEach(inject(function (_$timeout_) {
               timeout = _$timeout_;
         }));
            
         it('should exist', function() {
            expect(doctorService.getDoctors).not.toEqual(null);
         });
         

         it('should return data', function() {
            var data;
            doctorService.getDoctors().then(function(result){
                data = result;
            });
            timeout.flush(1000);
            
            expect(data).toEqual(jasmine.any(Array));
            expect(data[0]).toEqual(jasmine.any(Object));
            expect(data[0].id).toBeDefined();
            expect(data[0].name).toBeDefined();

         });

      });

   });
})();