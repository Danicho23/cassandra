
package com.cassandra.repository;

import com.cassandra.model.vehiculo;
import java.util.List;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface vehiculoRepository extends CrudRepository<vehiculo, String>{
    
    @Query(value = "SELECT * FROM vehiculo WHERE marca=?0")
    public List<vehiculo> findBymarca(String marca);
}
